'use client'
import React from 'react'
import { useRouter } from 'next-nprogress-bar'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useCallback } from 'react'
import { formatPhoneNumber } from '@/shared/utils/formatPhoneNumber'
import { useSelector } from 'react-redux'
import styles from './SubscribeForm.module.scss'

const schema = z.object({
	fullname: z.string().min(1, 'ФИО обязательно'),
	tel: z.string().min(1, 'Номер телефона обязателен'),
	email: z
		.string()
		.nonempty('Email обязателен')
		.email({ message: 'Неверный формат email' }),
	password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
	payment_card: z
		.string()
		.nonempty('Тип карты обязателен')
		.refine(val => val === 'Visa' || val === 'MasterCard', {
			message: 'Поддерживаются только VISA или MasterCard'
		}),
	card_number: z
		.string()
		.regex(
			/^\d{4}-\d{4}-\d{4}-\d{4}$/,
			'Номер карты должен быть в формате xxxx-xxxx-xxxx-xxxx'
		),
	card_date: z
		.string()
		.regex(
			/^(0[1-9]|1[0-2])\/\d{2}$/,
			'Дата карты должна быть в формате MM/ГГ'
		),

	card_cvc: z.string().regex(/^\d{3}$/, 'CVC код должен содержать 3 цифры'),
	agree: z.boolean().refine(val => val === true, {
		message: 'Необходимо согласие с условиями'
	})
})
type ISchema = z.infer<typeof schema>

type TProps = {
	subscription: SubscriptionsTypes.Subscription
}

const SubscribeForm: React.FC<TProps> = ({ subscription }) => {
	const route = useRouter()
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])

	const methods = useForm<ISchema>({
		resolver: zodResolver(schema),
		defaultValues: { ...state?.data }
	})
	const {
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		register
	} = methods
	// const response = error as unknown as { data: any }
	const handlePhoneChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const formattedPhone = formatPhoneNumber(e.target.value)
			setValue('tel', formattedPhone)
		},
		[setValue]
	)

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
							<label htmlFor='tel' className={'tel-c'}>
								+996
							</label>
							<input
								type='text'
								{...register('tel')}
								onChange={handlePhoneChange}
							/>
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
							<label className={'label'}>Выберите платежную карту</label>
							<div className={styles.row}>
								<button
									type='button'
									className={clsx({
										[styles.active]: watch('payment_card') === 'Visa'
									})}
									onClick={() => setValue('payment_card', 'Visa')}
								>
									<span></span>
									Visa
								</button>
								<button
									type='button'
									className={clsx({
										[styles.active]: watch('payment_card') === 'MasterCard'
									})}
									onClick={() => setValue('payment_card', 'MasterCard')}
								>
									<span></span>
									MasterCard
								</button>
							</div>
							{errors.payment_card && (
								<span className={'error'}>{errors.payment_card.message}</span>
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
								<label className={'label'} htmlFor='card_date'>
									ММ/ГГ *
								</label>
								<input {...register('card_date')} type='text' id='card_date' />
								{errors.card_date && (
									<span className={'error'}>{errors.card_date.message}</span>
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
