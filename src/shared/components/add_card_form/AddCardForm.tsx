'use client'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Popup } from '@/shared/components/popup/Popup'
import clsx from 'clsx'
import { useAddPaymentCardMutation } from '@/shared/redux/api/user'
import { formatCardNumber } from '@/shared/utils/formatting'
import styles from './AddCardForm.module.scss';

const cardSchema = z.object({
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
	card_type: z.enum(['Visa', 'MasterCard'], { message: 'Выберите тип карты' })
})
type TProps = {
	onClose(): void
	open: boolean
}
type CardFormData = z.infer<typeof cardSchema>
const AddCardForm: React.FC<TProps> = ({ onClose, open }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch
	} = useForm<CardFormData>({
		resolver: zodResolver(cardSchema)
	})
	const changeCardType = useCallback(
		(type: 'Visa' | 'MasterCard') => setValue('card_type', type),
		[setValue]
	)
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

	const [mutate, { error }] = useAddPaymentCardMutation()
	const response = error as unknown as { data: any }
	async function onSubmit({ card_cvc, ...data }: CardFormData) {
		const { data: response } = await mutate(data)
		if (response?.message) {
			alert(response?.message)
			onClose()
		}
	}
	return (
		<Popup
			open={open}
			blur_bg
			className={styles.popup}
			onClose={onClose}
		>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h3>Данные карты </h3>
				<div className={styles.form_group}>
					<label htmlFor='card_type'>Тип карты*</label>
					<div className={styles['row']}>
						<button
							type='button'
							className={clsx(watch('card_type') == 'Visa' && styles.active)}
							onClick={() => changeCardType('Visa')}
						>
							<span></span>
							Visa
						</button>
						<button
							type='button'
							className={clsx(
								watch('card_type') == 'MasterCard' && styles.active
							)}
							onClick={() => changeCardType('MasterCard')}
						>
							<span></span>
							Master Card
						</button>
					</div>
					{errors.card_type && (
						<p className={styles.error}>{errors.card_type.message}</p>
					)}
				</div>
				<div className={styles.form_group}>
					<label htmlFor='card_number'>Номер карты*</label>
					<input
						id='card_number'
						type='text'
						{...register('card_number')}
						onChange={changeCardNumber}
						placeholder='XXXX XXXX XXXX XXXX'
						className={styles.input}
					/>
					{errors.card_number && (
						<p className={styles.error}>{errors.card_number.message}</p>
					)}
				</div>
				<div className={styles['form_groups']}>
					<div className={styles.form_group}>
						<label htmlFor='expiration_date'>Срок действия (MM/YY)*</label>
						<input
							id='expiration_date'
							type='text'
							{...register('expiration_date')}
							placeholder='MM/YY'
							onChange={changeExpiryDate}
							className={styles.input}
						/>
						{errors.expiration_date && (
							<p className={styles.error}>{errors.expiration_date.message}</p>
						)}
					</div>
					<div className={styles.form_group}>
						<label htmlFor='card_cvc'>card_cvc*</label>
						<input
							id='card_cvc'
							type='password'
							{...register('card_cvc')}
							placeholder='***'
							maxLength={3}
							className={styles.input}
						/>
						{errors.card_cvc && (
							<p className={styles.error}>{errors.card_cvc.message}</p>
						)}
					</div>
				</div>
				{response?.data && response.data.detail && (
					<p className={styles.error_message}>{response.data.detail}</p>
				)}
				<button type='submit' className={styles.submit_btn}>
					Добавить карту
				</button>
			</form>
		</Popup>
	)
}

export default AddCardForm
