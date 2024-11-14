import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import styles from './RegisterForm.module.scss'
import clsx from 'clsx'
import { useGetMeInfoQuery } from '@/shared/redux/api/user'
import { formatExpiryDate, formatPhoneNumber } from '@/shared/utils/formatting'
type TRegisterFormProps = {
	price: string
}
const register_schema = z.object({
	fullname: z.string().nonempty('ФИО обязательно'),
	tel: z
		.string()
		.nonempty('Телефон обязателен')
		.regex(
			/^(\d{3}) (\d{3}) (\d{3})$/,
			'Некорректный номер телефона. Формат: xxx xxx xxx'
		),
	email: z.string().nonempty('Email обязателен').email('Некорректный email'),
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

type TRegisterSchema = z.infer<typeof register_schema>

const RegisterForm: React.FC<TRegisterFormProps> = ({ price }) => {
	const { data } = useGetMeInfoQuery('payment_cards')

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue
	} = useForm<TRegisterSchema>({
		resolver: zodResolver(register_schema),
		defaultValues: {
			card_number: data ? data[0].card_number : '',
			expiration_date: data ? formatExpiryDate(data[0].expiration_date) : '',
			card_type: data ? data[0].card_type : 'Visa'
		}
	})

	const onSubmit: SubmitHandler<TRegisterSchema> = async data => {
		try {
		} catch (e) {}
	}

	useEffect(() => {
		if (data) {
			setValue('card_number', data[0].card_number)
			setValue('expiration_date', formatExpiryDate(data[0].expiration_date))
			setValue('card_type', data[0].card_type)
		}
	}, [data, setValue])

	const card_type = watch('card_type')
	const changeCardType = useCallback(
		(type: 'Visa' | 'MasterCard') => setValue('card_type', type),
		[setValue]
	)
	const changePhone = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const formattedPhone = formatPhoneNumber(e.target.value)
			setValue('tel', formattedPhone)
		},
		[setValue]
	)

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.for_inp}>
				<label className={styles.label} htmlFor='fullname'>
					Ф.И.О*
				</label>
				<input {...register('fullname')} type='text' id='fullname' />
				{errors.fullname && (
					<span className={styles.error}>{errors.fullname.message}</span>
				)}
			</div>
			<div className={styles['for_inp']}>
				<label htmlFor='tel'>Номер телефона*</label>
				<div className={styles['row']}>
					<label htmlFor='tel' className={styles['tel-c']}>
						+996
					</label>
					<input type='text' {...register('tel')} onChange={changePhone} />
				</div>
				{errors.tel && (
					<span className={styles.error}>{errors.tel.message}</span>
				)}
			</div>
			<div className={styles.for_inp}>
				<label className={styles.label} htmlFor='email'>
					E mail*
				</label>
				<input {...register('email')} type='text' id='email' />
				{errors.email && (
					<span className={styles.error}>{errors.email.message}</span>
				)}
			</div>
			<div className={styles['card_type']}>
				<label className={styles.label}>Выберите платежную карту</label>
				<div className={styles['row']}>
					<button
						type='button'
						onClick={() => changeCardType('Visa')}
						className={clsx({ [styles.active]: card_type === 'Visa' })}
					>
						<span></span>
						Visa
					</button>
					<button
						type='button'
						onClick={() => changeCardType('MasterCard')}
						className={clsx({ [styles.active]: card_type === 'MasterCard' })}
					>
						<span></span>
						MasterCard
					</button>
				</div>
				{errors.card_type && (
					<span className={styles.error}>{errors.card_type.message}</span>
				)}
			</div>
			<div className={styles.for_inp}>
				<label className={styles.label} htmlFor='card_number'>
					Номер карты *
				</label>
				<input {...register('card_number')} type='text' id='card_number' />
				{errors.card_number && (
					<span className={styles.error}>{errors.card_number.message}</span>
				)}
			</div>
			<div className={styles['for_inps']}>
				<div className={styles.for_inp}>
					<label className={styles.label} htmlFor='expiration_date'>
						ММ/ГГ *
					</label>
					<input
						{...register('expiration_date')}
						type='text'
						id='expiration_date'
					/>
					{errors.expiration_date && (
						<span className={styles.error}>
							{errors.expiration_date.message}
						</span>
					)}
				</div>
				<div className={styles.for_inp}>
					<label className={styles.label} htmlFor='card_cvc'>
						CVC *
					</label>
					<input
						{...register('card_cvc')}
						autoComplete='off'
						type='password'
						id='card_cvc'
					/>
					{errors.card_cvc && (
						<span className={styles.error}>{errors.card_cvc.message}</span>
					)}
				</div>
			</div>
			<button className={styles.sign_btn} type='submit'>
				Оплатит {price} $
			</button>
			<div className={styles.agree}>
				<div className={styles.row}>
					<button
						type='button'
						onClick={() => setValue('agree', !watch('agree'))}
						className={clsx(styles.checkbox, watch('agree') && styles.checked)}
					></button>

					<p>Я ознакомился и согласен с Условиями оказания услуг</p>
				</div>
				{errors.agree && (
					<span className={styles.error}>{errors.agree.message}</span>
				)}
			</div>
		</form>
	)
}

export default RegisterForm
