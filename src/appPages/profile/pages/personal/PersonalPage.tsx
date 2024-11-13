'use client'
import DateSelect from '@/shared/ui/date_select/DateSelect'
import { formatPhoneNumber } from '@/shared/utils/formatPhoneNumber'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import React, { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { z } from 'zod'
import styles from './PersonalPage.module.scss'

const schema = z.object({
	fullname: z.string().min(1, 'ФИО обязательно'),
	tel: z.string().min(1, 'Номер телефона обязателен'),
	email: z
		.string()
		.nonempty('Email обязателен')
		.email({ message: 'Неверный формат email' }),
	birthdate: z
		.string()
		.nonempty('Дата рождения обязательна')
		.regex(/^\d{4}-\d{2}-\d{2}$/, 'Дата рождения обязательна'),
	country: z.string().nonempty('Страна обязательна'),
	city: z.string().nonempty('Город обязателен'),
	occupation: z.string().nonempty('Профессия обязательна'),
	gender: z.enum(['мужской', 'женский'])
})
type TSchema = z.infer<typeof schema>

const PersonalPage: React.FC = () => {
	const state = useSelector((s: any) => s?.api?.queries['getMe(undefined)'])
	const methods = useForm<TSchema>({
		resolver: zodResolver(schema),
		defaultValues: {
			...state?.data,
			tel: formatPhoneNumber(state?.data?.tel)
		}
	})
	const {
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		register
	} = methods

	const handleDateChange = useCallback(
		(date: string) => {
			setValue('birthdate', date)
		},
		[setValue]
	)

	const onSubmit: SubmitHandler<TSchema> = async data => {}

	const handlePhoneChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const formattedPhone = formatPhoneNumber(e.target.value)
			setValue('tel', formattedPhone)
		},
		[setValue]
	)

	return state && state?.isLoading ? (
		<span>Загрузка...</span>
	) : (
		<div className={styles.personal_page}>
			<h1>Личные данные</h1>
			<form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
				<div className={styles['input_block']}>
					<div className={styles['input_box']}>
						<div className={styles['for_inp']}>
							<label htmlFor='fullname'>ФИО*</label>
							<input type='text' {...register('fullname')} />
							{errors.fullname && (
								<span className={styles['error']}>
									{errors.fullname.message}
								</span>
							)}
						</div>

						<div className={styles['for_inp']}>
							<label htmlFor='tel'>Номер телефона*</label>
							<label htmlFor='tel' className={styles['tel-c']}>+996</label>
							<input
								type='text'
								{...register('tel')}
								onChange={handlePhoneChange}
							/>
							{errors.tel && (
								<span className={styles['error']}>{errors.tel.message}</span>
							)}
						</div>

						<div className={styles['for_inp']}>
							<label htmlFor='email'>Email*</label>
							<input type='text' {...register('email')} />
							{errors.email && (
								<span className={styles['error']}>{errors.email.message}</span>
							)}
						</div>

						<div className={styles['for_inp']}>
							<label htmlFor='gender'>Пол*</label>
							<div className={styles['gender']}>
								<button
									type='button'
									className={clsx(styles.input, {
										[styles.active]: ['мужской', 'man'].includes(
											watch('gender')
										)
									})}
									onClick={() => setValue('gender', 'мужской')}
								>
									<span></span>
									Мужской
								</button>
								<button
									type='button'
									className={clsx(styles.input, {
										[styles.active]: ['женский', 'woman'].includes(
											watch('gender')
										)
									})}
									onClick={() => setValue('gender', 'женский')}
								>
									<span></span>
									Женский
								</button>
							</div>
							{errors.gender && (
								<span className={styles['error']}>{errors.gender.message}</span>
							)}
						</div>
					</div>

					<div className={styles['input_box']}>
						<div className={styles['for_inp']}>
							<label>Дата рождения*</label>
							<DateSelect
								defaultValues={watch('birthdate')}
								onDateChange={handleDateChange}
							/>
							{errors.birthdate && (
								<span className={styles['error']}>
									{errors.birthdate.message}
								</span>
							)}
						</div>

						<div className={styles['for_inp']}>
							<label htmlFor='country'>Страна*</label>
							<input type='text' {...register('country')} />
							{errors.country && (
								<span className={styles['error']}>
									{errors.country.message}
								</span>
							)}
						</div>

						<div className={styles['for_inp']}>
							<label htmlFor='city'>Город*</label>
							<input type='text' {...register('city')} />
							{errors.city && (
								<span className={styles['error']}>{errors.city.message}</span>
							)}
						</div>

						<div className={styles['for_inp']}>
							<label htmlFor='occupation'>Род деятельности*</label>
							<input type='text' {...register('occupation')} />
							{errors.occupation && (
								<span className={styles['error']}>
									{errors.occupation.message}
								</span>
							)}
						</div>
					</div>
				</div>
				{/* <button className={'sign_btn'} type='submit'>
					Создать аккаунт
				</button> */}
			</form>
		</div>
	)
}

export default PersonalPage
