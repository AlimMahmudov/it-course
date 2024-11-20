import ChoicePaymentCards from '@/shared/components/choice_payment_cards/ChoicePaymentCards'
import { formatCardNumber, formatExpiryDate } from '@/shared/utils/formatting'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { parseAsBoolean, useQueryState } from 'nuqs'
import React, { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { z } from 'zod'
import styles from './PaymentProcessForm.module.scss'
import { RxDotsVertical } from 'react-icons/rx'

const register_schema = z.object({
	fullname: z.string().nonempty('ФИО обязательно'),
	tel: z.string().nonempty('Телефон обязателен'),
	email: z.string().nonempty('Email обязателен').email('Некорректный email'),
	card_number: z
		.string()
		.min(1, 'Введите номер карты')
		.regex(/^(\d{4} \d{4} \d{4} \d{4})$/, '16 цифр'),
	password: z.string().min(1, 'Введите свой пароль'),
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
	}),
	phone_code: z.union([
		z.string().min(1, 'Код телефона обязателен'),
		z.number().min(1, 'Код телефона обязателен')
	])
})

type TPaymentProcessFormProps = {
	price: string
	onSubmit(arg: IProcessPaymentArg): Promise<void>
	error_message?: string
}

type TProcessPaymentSchema = z.infer<typeof register_schema>

const PaymentProcessForm: React.FC<TPaymentProcessFormProps> = ({
	price,
	onSubmit,
	error_message
}) => {
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])
	const [open, setOpen] = useQueryState(
		'is_choise',
		parseAsBoolean.withDefault(false)
	)
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue
	} = useForm<TProcessPaymentSchema>({
		resolver: zodResolver(register_schema),
		defaultValues: {
			...state?.data
		}
	})

	const changeCardType = useCallback(
		(type: 'Visa' | 'MasterCard') => setValue('card_type', type),
		[setValue]
	)

	const choisePaymentCard = useCallback((card_data: UserTypes.PaymentCard) => {
		setValue('card_number', card_data.card_number)
		setValue('expiration_date', formatExpiryDate(card_data.expiration_date))
		setValue('card_type', card_data.card_type)
		setOpen(false)
	}, [])

	const changeCardNumber = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) =>
			setValue('card_number', formatCardNumber(e.target.value)),
		[setValue]
	)

	const changeExpiryDate = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			let value = e.target.value.replace(/\D/g, '').slice(0, 4)
			if (value.length >= 2) value = `${value.slice(0, 2)}/${value.slice(2)}`
			setValue('expiration_date', value)
		},
		[setValue]
	)
	const on_submit: SubmitHandler<IProcessPaymentArg> = data => onSubmit(data)

	return (
		<div id={'BaseForm'} className='nop'>
			<div className={'BaseForm'}>
				<form className={'form'} onSubmit={handleSubmit(on_submit)}>
					<div className={'for_inp'}>
						<label htmlFor='fullname'>Ф.И.О*</label>
						<input {...register('fullname')} type='text' id='fullname' />
						{errors.fullname && (
							<span className={'error'}>{errors.fullname.message}</span>
						)}
					</div>
					<div className={'for_inp'}>
						<label htmlFor='tel'>Номер телефона*</label>
						<div className={'row'}>
							<label htmlFor='tel' className={'tel-c'}>
								+{watch('phone_code') ?? '000'}
							</label>
							<input type='text' {...register('tel')} />
						</div>
						{errors.tel && (
							<span className={'error'}>{errors.tel.message}</span>
						)}
					</div>
					<div className={'for_inp'}>
						<label htmlFor='email'>E mail*</label>
						<input {...register('email')} type='text' id='email' />
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
					<div className={styles['payment_card']}>
						<label onClick={() => setOpen(!open)}>
							Выберите платежную карту
							<span className={styles.icon}>
								<RxDotsVertical />
							</span>
						</label>
						{open && <ChoicePaymentCards choise={choisePaymentCard} />}
						<div className={styles['row']}>
							<button
								type='button'
								onClick={() => changeCardType('Visa')}
								className={clsx({
									[styles.active]: watch('card_type') === 'Visa'
								})}
							>
								<span></span>
								Visa
							</button>
							<button
								type='button'
								onClick={() => changeCardType('MasterCard')}
								className={clsx({
									[styles.active]: watch('card_type') === 'MasterCard'
								})}
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
						<label htmlFor='card_number'>Номер карты *</label>
						<input
							{...register('card_number')}
							onChange={changeCardNumber}
							type='text'
							id='card_number'
						/>
						{errors.card_number && (
							<span className={'error'}>{errors.card_number.message}</span>
						)}
					</div>
					<div className={'for_inps'}>
						<div className={'for_inp'}>
							<label htmlFor='expiration_date'>ММ/ГГ *</label>
							<input
								{...register('expiration_date')}
								type='text'
								id='expiration_date'
								onChange={changeExpiryDate}
							/>
							{errors.expiration_date && (
								<span className={'error'}>
									{errors.expiration_date.message}
								</span>
							)}
						</div>
						<div className={'for_inp'}>
							<label htmlFor='card_cvc'>CVC *</label>
							<input
								{...register('card_cvc')}
								autoComplete='off'
								type='password'
								id='card_cvc'
							/>
							{errors.card_cvc && (
								<span className={'error'}>{errors.card_cvc.message}</span>
							)}
						</div>
					</div>
					<button className={'process_payment'} type='submit'>
						Оплатит {price} $
					</button>
					<div className={styles['agree']}>
						<div className={styles['row']}>
							<button
								type='button'
								onClick={() => setValue('agree', !watch('agree'))}
								className={clsx(
									styles['checkbox'],
									watch('agree') && styles['checked']
								)}
							></button>

							<p>Я ознакомился и согласен с Условиями оказания услуг</p>
						</div>
						{errors.agree && (
							<span className={styles['agree-error']}>
								{errors.agree.message}
							</span>
						)}
					</div>
					{error_message && <p className='error-message'>{error_message}</p>}
				</form>
			</div>
		</div>
	)
}

export default PaymentProcessForm
