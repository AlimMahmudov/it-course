'use client'
import logo from '@/shared/assets/logo.svg'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import { useRouter } from 'next-nprogress-bar'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterMutation } from '@/shared/redux/api/auth'

const schema = z.object({
	fullname: z.string().min(1, { message: 'ФИО обязательно' }),
	tel: z.string().min(1, { message: 'Номер телефона обязателен' }),
	email: z
		.string()
		.min(1, { message: 'Email обязателен' })
		.email({ message: 'Неверный формат email' }),
	password: z
		.string()
		.min(8, { message: 'Пароль должен содержать минимум 8 символов' }),
	profile_pic: z.string().min(1, { message: 'Фото профиля обязательно' }),
	birthdate: z.string().min(1, { message: 'Дата рождения обязательна' }),
	country: z.string().min(1, { message: 'Страна обязательна' }),
	city: z.string().min(1, { message: 'Город обязателен' }),
	occupation: z.string().min(1, { message: 'Профессия обязательна' }),
	gender: z.enum(['мужской', 'женский'])
})

type IInputComponentProps = z.infer<typeof schema>

const SignUp = () => {
	const route = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		watch,
		formState: { errors }
	} = useForm<IInputComponentProps>({
		resolver: zodResolver(schema),
		defaultValues: {
			gender: 'мужской'
		}
	})
	const [registration, { error }] = useRegisterMutation()
	const response = error as unknown as { data: any }

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
				reset()
				route.push("/")
			}
		}
	}

	return (
		<div id={"Auth"}>
			<div className='container'>
				<div className={"Auth"}>
					<Link href='/' className={"logo"}>
						<Image src={logo} alt='' />
					</Link>

					<form onSubmit={handleSubmit(onSubmit)} className={"form"}>
						<div className={"input_block"}>
							<div className={"input_box"}>
								<div className={"for_inp"}>
									<label htmlFor='fullname'>ФИО*</label>
									<input type='text' {...register('fullname')} />
									{errors.fullname && (
										<span className={"error"}>
											{errors.fullname.message}
										</span>
									)}
								</div>

								<div className={"for_inp"}>
									<label htmlFor='tel'>Номер телефона*</label>
									<input type='text' {...register('tel')} />
									{errors.tel && (
										<span className={"error"}>{errors.tel.message}</span>
									)}
								</div>

								<div className={"for_inp"}>
									<label htmlFor='email'>Email*</label>
									<input type='text' {...register('email')} />
									{errors.email && (
										<span className={"error"}>{errors.email.message}</span>
									)}
								</div>

								<div className={"for_inp"}>
									<label htmlFor='password'>Пароль*</label>
									<input type='password' {...register('password')} />
									{errors.password && (
										<span className={"error"}>
											{errors.password.message}
										</span>
									)}
								</div>

								<div className={"for_inp"}>
									<label htmlFor='gender'>Пол*</label>
									<select
										{...register('gender')}
										value={watch('gender')}
										onChange={e =>
											setValue(
												'gender',
												e.target.value as 'мужской' | 'женский'
											)
										}
									>
										<option value='мужской'>Мужской</option>
										<option value='женский'>Женский</option>
									</select>
									{errors.gender && (
										<span className={"error"}>{errors.gender.message}</span>
									)}
								</div>
							</div>

							<div className={"input_box"}>
								<div className={"for_inp"}>
									<label htmlFor='profile_pic'>Фото профиля*</label>
									<input type='text' {...register('profile_pic')} />
									{errors.profile_pic && (
										<span className={"error"}>{errors.profile_pic.message}</span>
									)}
								</div>

								<div className={"for_inp"}>
									<label htmlFor='birthdate'>Дата рождения*</label>
									<input type='date' {...register('birthdate')} />
									{errors.birthdate && (
										<span className={"error"}>
											{errors.birthdate.message}
										</span>
									)}
								</div>

								<div className={"for_inp"}>
									<label htmlFor='country'>Страна*</label>
									<input type='text' {...register('country')} />
									{errors.country && (
										<span className={"error"}>{errors.country.message}</span>
									)}
								</div>

								<div className={"for_inp"}>
									<label htmlFor='city'>Город*</label>
									<input type='text' {...register('city')} />
									{errors.city && (
										<span className={"error"}>{errors.city.message}</span>
									)}
								</div>

								<div className={"for_inp"}>
									<label htmlFor='occupation'>Профессия*</label>
									<input type='text' {...register('occupation')} />
									{errors.occupation && (
										<span className={"error"}>
											{errors.occupation.message}
										</span>
									)}
								</div>
							</div>
						</div>
						<button className={"sign_btn"} type='submit'>
							Создать аккаунт
						</button>
						{response?.data?.detail && <p>{response.data.detail}</p>}
						<p className={"cn"}>
							Уже есть учетный запис? <Link href='/auth/signin'>Войти</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp
