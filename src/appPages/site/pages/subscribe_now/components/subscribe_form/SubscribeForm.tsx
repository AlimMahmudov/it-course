'use client'
import { formatExpiryDate, formatPhoneNumber } from '@/shared/utils/formatting'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import React, { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { z } from 'zod'
import styles from './SubscribeForm.module.scss'
import { parseAsBoolean, useQueryState } from 'nuqs'
import ChoicePaymentCards from '@/shared/components/choice_payment_cards/ChoicePaymentCards'

const schema = z.object({
	fullname: z.string().min(1, 'ФИО обязательно'),
	tel: z.string().min(1, 'Номер телефона обязателен'),
	email: z
		.string()
		.nonempty('Email обязателен')
		.email({ message: 'Неверный формат email' }),
	password: z.string().min(1, 'Введите свой пароль'),
	card_number: z
		.string()
		.min(1, 'Введите номер карты')
		.regex(/^(\d{4} \d{4} \d{4} \d{4})$/, '16 цифр'),
	expiration_date: z
		.string()
		.min(1, 'Введите срок действия')
		.regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Формат MM/YY'),
	card_cvc: z
		.string()
		.min(1, 'Введите CVC')
		.regex(/^\d{3}$/, '3 цифры'),
	card_type: z.enum(['Visa', 'MasterCard'], { message: 'Выберите тип карты' }),
	agree: z.boolean().refine(val => val === true, {
		message: 'Необходимо согласие с условиями'
	})
})
type ISchema = z.infer<typeof schema>

type TProps = {
	subscription: SubscriptionsTypes.Subscription
}

const SubscribeForm: React.FC<TProps> = ({ subscription }) => {
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])

	const methods = useForm<ISchema>({
		resolver: zodResolver(schema),
		defaultValues: {
			...state?.data
		}
	})
	const {
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		register
	} = methods
	const [open, setOpen] = useQueryState(
		'is_choise',
		parseAsBoolean.withDefault(true)
	)
	// const response = error as unknown as { data: any }
	const handlePhoneChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const formattedPhone = formatPhoneNumber(e.target.value)
			setValue('tel', formattedPhone)
		},
		[setValue]
	)

	const choisePaymentCard = useCallback((card_data: UserTypes.PaymentCard) => {
		setValue('card_number', card_data.card_number)
		setValue('expiration_date', formatExpiryDate(card_data.expiration_date))
		setValue('card_type', card_data.card_type)
		setOpen(false)
	}, [])

	const onSubmit: SubmitHandler<ISchema> = async data => {}
	return (
		<div id={'BaseForm'} className='nop'>
			<>
				<div className={'BaseForm'}>
					<form onSubmit={handleSubmit(onSubmit)} className={'form'}>
						<div className={'for_inp'}>
							<label htmlFor='fullname'>ФИО*</label>
							<input type='text' {...register('fullname')} />
							{errors.fullname && (
								<span className={'error'}>{errors.fullname.message}</span>
							)}
						</div>

						<div className={'for_inp'}>
							<label htmlFor='tel'>Номер телефона*</label>
							<div className='row'>
								<label htmlFor='tel' className={'tel-c'}>
									+996
								</label>
								<input
									type='text'
									{...register('tel')}
									onChange={handlePhoneChange}
								/>
							</div>
							{errors.tel && (
								<span className={'error'}>{errors.tel.message}</span>
							)}
						</div>

						<div className={'for_inp'}>
							<label htmlFor='email'>Email*</label>
							<input type='text' {...register('email')} />
							{errors.email && (
								<span className={'error'}>{errors.email.message}</span>
							)}
						</div>

						<div className={'for_inp'}>
							<label htmlFor='password'>Пароль*</label>
							<input type='password' {...register('password')} />
							{errors.password && (
								<span className={'error'}>{errors.password.message}</span>
							)}
						</div>
						<div className={styles.payment_card}>
							<label onClick={() => setOpen(!open)} className={'label'}>
								Выберите платежную карту
							</label>
							{open && <ChoicePaymentCards choise={choisePaymentCard} />}
							<div className={styles.row}>
								<button
									type='button'
									className={clsx({
										[styles.active]: watch('card_type') === 'Visa'
									})}
									onClick={() => setValue('card_type', 'Visa')}
								>
									<span></span>
									Visa
								</button>
								<button
									type='button'
									className={clsx({
										[styles.active]: watch('card_type') === 'MasterCard'
									})}
									onClick={() => setValue('card_type', 'MasterCard')}
								>
									<span></span>
									MasterCard
								</button>
							</div>
							{errors.card_type && (
								<span className={'error'}>{errors.card_type.message}</span>
							)}
						</div>
						<div className={'for_inp'}>
							<label className={'label'} htmlFor='card_number'>
								Номер карты *
							</label>
							<input
								{...register('card_number')}
								type='text'
								id='card_number'
							/>
							{errors.card_number && (
								<span className={'error'}>{errors.card_number.message}</span>
							)}
						</div>
						<div className={'for_inps'}>
							<div className={'for_inp'}>
								<label className={'label'} htmlFor='expiration_date'>
									ММ/ГГ *
								</label>
								<input
									{...register('expiration_date')}
									type='text'
									id='expiration_date'
								/>
								{errors.expiration_date && (
									<span className={'error'}>
										{errors.expiration_date.message}
									</span>
								)}
							</div>
							<div className={'for_inp'}>
								<label className={'label'} htmlFor='card_cvc'>
									CVC *
								</label>
								<input
									{...register('card_cvc')}
									type='text'
									id='card_cvc'
									autoComplete='off'
								/>
								{errors.card_cvc && (
									<span className={'error'}>{errors.card_cvc.message}</span>
								)}
							</div>
						</div>

						<button className={'sign_btn subscribe_now'} type='submit'>
							Оплатит {subscription.price} $
						</button>
					</form>
				</div>
			</>
		</div>
	)
}

export default SubscribeForm
