'use client'
import logo from '@/shared/assets/logo.svg'
import DateSelect from '@/shared/components/date_select/DateSelect'
import useCSC from '@/shared/hooks/useCSC'
import useFetch from '@/shared/hooks/useFetch'
import { useRegisterMutation } from '@/shared/redux/api/auth'
import { getCities, getCountries } from '@/shared/utils/csc-api'
import { formatPhoneNumber } from '@/shared/utils/formatting'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useRouter } from 'next-nprogress-bar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	fullname: z.string().min(1, 'ФИО обязательно'),
	tel: z.string().min(1, 'Номер телефона обязателен'),
	email: z
		.string()
		.nonempty('Email обязателен')
		.email({ message: 'Неверный формат email' }),
	password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
	profile_pic: z.string().nonempty({ message: 'Фото профиля обязательно' }),
	birthdate: z
		.string()
		.nonempty('Дата рождения обязательна')
		.regex(/^\d{4}-\d{2}-\d{2}$/, 'Дата рождения обязательна'),
	country: z.string().nonempty('Страна обязательна'),
	city: z.string().nonempty('Город обязателен'),
	occupation: z.string().nonempty('Профессия обязательна'),
	gender: z.enum(['мужской', 'женский'])
})

type IInputComponentProps = z.infer<typeof schema>

const SignUp = () => {
	const route = useRouter()
	const methods = useForm<IInputComponentProps>({
		resolver: zodResolver(schema)
	})
	const {
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		register
	} = methods
	const [registration, { error }] = useRegisterMutation()
	const response = error as unknown as { data: any }

	const { countries, cities, changeCountryISO, countryIso } = useCSC({})

	const handlePhoneChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const formattedPhone = formatPhoneNumber(e.target.value)
			setValue('tel', formattedPhone)
		},
		[setValue]
	)

	const handleDateChange = useCallback(
		(date: string) => {
			setValue('birthdate', date)
		},
		[setValue]
	)

	const handleCountryChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const selectedOption = e.target.selectedOptions[0]
			const selectedCountryIso = selectedOption?.getAttribute('data-iso')
			changeCountryISO(String(selectedCountryIso))
		},
		[changeCountryISO]
	)

	const onSubmit: SubmitHandler<IInputComponentProps> = async data => {
		const { data: responseData } = await registration(data)
		if (responseData) {
			if (responseData?.accessToken && responseData?.refreshToken) {
				localStorage.setItem(
					'accessToken',
					JSON.stringify(responseData?.accessToken)
				)
				localStorage.setItem(
					'refreshToken',
					JSON.stringify(responseData?.refreshToken)
				)
				route.push('/profile/personal')
			}
		}
	}

	return (
		<div id={'BaseForm'}>
			<div className='container'>
				<div className={'BaseForm '}>
					<Link href='/' className={'logo'}>
						<Image src={logo} alt='' />
					</Link>

					<form onSubmit={handleSubmit(onSubmit)} className={'form'}>
						<div className={'input_block'}>
							<div className={'input_box'}>
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

								<div className={'for_inp'}>
									<label htmlFor='gender'>Пол*</label>
									<div className={'gender'}>
										<button
											type='button'
											className={clsx('input', {
												active: watch('gender') === 'мужской'
											})}
											onClick={() => setValue('gender', 'мужской')}
										>
											<span></span>
											Мужской
										</button>
										<button
											type='button'
											className={clsx('input', {
												active: watch('gender') === 'женский'
											})}
											onClick={() => setValue('gender', 'женский')}
										>
											<span></span>
											Женский
										</button>
									</div>
									{errors.gender && (
										<span className={'error'}>{errors.gender.message}</span>
									)}
								</div>
							</div>

							<div className={'input_box'}>
								<div className={'for_inp'}>
									<label htmlFor='profile_pic'>Фото профиля*</label>
									<input type='text' {...register('profile_pic')} />
									{errors.profile_pic && (
										<span className={'error'}>
											{errors.profile_pic.message}
										</span>
									)}
								</div>
								<div className={'for_inp'}>
									<label>Дата рождения*</label>
									<DateSelect onDateChange={handleDateChange} />
									{errors.birthdate && (
										<span className={'error'}>{errors.birthdate.message}</span>
									)}
								</div>
								<div className={'for_inp'}>
									<label htmlFor='country'>Страна*</label>
									<select
										{...register('country')}
										name='country'
										id='country'
										onChange={handleCountryChange}
									>
										<option value=''>Выберите страну</option>
										{Array.isArray(countries.data) &&
											countries.data?.map(country => (
												<option
													value={country.name}
													data-iso={country.iso2}
													key={country.id}
												>
													{country.name}
												</option>
											))}
									</select>
									{errors.country && (
										<span className={'error'}>{errors.country.message}</span>
									)}
								</div>
								<div className={'for_inp'}>
									<label htmlFor='city'>Город*</label>
									<select {...register('city')} name='city' id='city'>
										<option value=''>Выберите город</option>
										{Array.isArray(countries.data) &&
											countryIso &&
											cities.data?.map(city => (
												<option value={city.name} key={city.id}>
													{city.name}
												</option>
											))}
									</select>
									{errors.city && (
										<span className={'error'}>{errors.city.message}</span>
									)}
								</div>
								<div className={'for_inp'}>
									<label htmlFor='occupation'>Род деятельности*</label>
									<input type='text' {...register('occupation')} />
									{errors.occupation && (
										<span className={'error'}>{errors.occupation.message}</span>
									)}
								</div>
							</div>
						</div>
						<button className={'sign_btn'} type='submit'>
							Создать аккаунт
						</button>
						{response?.data?.detail && <p>{response.data.detail}</p>}
						<p className={'cn'}>
							Уже есть учетный запис? <Link href='/auth/signin'>Войти</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp
