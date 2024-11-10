'use client'
import logo from '@/shared/assets/logo.svg'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import { useRouter } from 'next-nprogress-bar'
import { SubmitHandler, useForm } from 'react-hook-form'
import scss from './SignUp.module.scss'
import Link from 'next/link'

interface IInputComponentProps {
	username: string
	tel: string
	email: string
	password: string
	photo: string
	day: number
	month: string
	year: number
	country: string
	sity: string
	Occupat: string
	man: string
	woman: string
}

const SignUp = () => {
	const route = useRouter()
	const { register, handleSubmit, reset } = useForm<IInputComponentProps>()

	const onSubmit: SubmitHandler<IInputComponentProps> = async data => {
		try {
			const { data: responseData } = await axios.post(
				`${process.env.NEXT_PUBLIC_API}/auth/sign-up`,
				data
			)
			console.log(responseData)
			reset()
			alert('Пользователь успешно за регицтраван')
		} catch (e) {
			const error = e as AxiosError
			console.log(error.response?.data)
		}
	}

	return (
		<div id={scss.SignUp}>
			<div className='container'>
				<div className={scss.signup}>
					<Link href='/' className={scss.signup_logo}>
						<Image src={logo} alt='' />
					</Link>

					<form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
						<div className={scss.input_block}>
							<div className={scss.input_box}>
								<div className={scss.for_inp}>
									<label htmlFor='email'>ФИО*</label>
									<input type='text' {...register('tel', { required: true })} />
								</div>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Номер телефон*</label>
									<input
										type='text'
										{...register('email', { required: true })}
									/>
								</div>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Email*</label>
									<input
										type='text'
										{...register('username', { required: true })}
									/>
								</div>

								<div className={scss.for_inp}>
									<label htmlFor='email'>Email*</label>
									<input
										type='text'
										{...register('password', { required: true })}
									/>
								</div>
								<div className={scss.pol}>
									<div className={scss.for_inp_woman}>
										<label htmlFor='email'>Пол*</label>
										<input
											type='text'
											{...register('man', { required: true })}
										/>
									</div>
									<div className={scss.for_inp_woman}>
										<label htmlFor='email'>Пол*</label>
										<input
											type='text'
											{...register('woman', { required: true })}
										/>
									</div>
								</div>
							</div>
							<div className={scss.input_box}>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Email*</label>
									<input
										type='text'
										{...register('photo', { required: true })}
									/>
								</div>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Дата рождения*</label>
									<input type='text' {...register('day', { required: true })} />
								</div>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Дата рождения*</label>
									<input
										type='text'
										{...register('month', { required: true })}
									/>
								</div>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Дата рождения*</label>
									<input
										type='text'
										{...register('year', { required: true })}
									/>
								</div>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Страна*</label>
									<input
										type='text'
										{...register('country', { required: true })}
									/>
								</div>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Город*</label>
									<input
										type='text'
										{...register('sity', { required: true })}
									/>
								</div>
								<div className={scss.for_inp}>
									<label htmlFor='email'>Email*</label>
									<input
										type='text'
										{...register('Occupat', { required: true })}
									/>
								</div>
							</div>
						</div>
						<button type='submit'>create</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp
