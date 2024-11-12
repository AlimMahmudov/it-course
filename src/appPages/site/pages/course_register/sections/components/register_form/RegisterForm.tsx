import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Schema, z } from 'zod'
import styles from './RegisterForm.module.scss'
import clsx from 'clsx'
type TRegisterFormProps = {
	course: ICourse
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

type TRegisterSchema = z.infer<typeof register_schema>

const RegisterForm: React.FC<TRegisterFormProps> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useForm<TRegisterSchema>({
		resolver: zodResolver(register_schema)
	})

	const onSubmit: SubmitHandler<TRegisterSchema> = async data => {
		try {
		} catch (e) {}
	}
	const payment_card = watch('payment_card')
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
			<div className={styles.for_inp}>
				<label className={styles.label} htmlFor='tel'>
					Телефон*
				</label>
				<input {...register('tel')} type='text' id='tel' />
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
			<div className={styles['select']}>
				<label className={styles.label}>Выберите платежную карту</label>
				<div className={styles['row']}>
					<button
						type='button'
						className={clsx({ [styles.active]: payment_card === 'Visa' })}
					>
						<span></span>
						Visa
					</button>
					<button
						type='button'
						className={clsx({ [styles.active]: payment_card === 'MasterCard' })}
					>
						<span></span>
						MasterCard
					</button>
				</div>
				{errors.payment_card && (
					<span className={styles.error}>{errors.payment_card.message}</span>
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
					<label className={styles.label} htmlFor='card_date'>
						ММ/ГГ *
					</label>
					<input {...register('card_date')} type='text' id='card_date' />
					{errors.card_date && (
						<span className={styles.error}>{errors.card_date.message}</span>
					)}
				</div>
				<div className={styles.for_inp}>
					<label className={styles.label} htmlFor='card_cvc'>
						CVC *
					</label>
					<input {...register('card_cvc')} type='text' id='card_cvc' />
					{errors.card_cvc && (
						<span className={styles.error}>{errors.card_cvc.message}</span>
					)}
				</div>
			</div>
			<div className={styles.buttons}>
				<button className={styles.sign_btn} type='submit'>
					Оплатит
				</button>
			</div>
		</form>
	)
}

export default RegisterForm
