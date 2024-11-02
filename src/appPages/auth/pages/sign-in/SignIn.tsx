'use client'
import logo from '@/shared/assets/logo.svg'
import { usePostUserSigninMutation } from '@/shared/redux/api/auth'
import { useLanguageStore } from '@/shared/stores/Language'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import scss from './SignIn.module.scss'
import Link from 'next/link'

const signinSchema = z.object({
	email: z.string().nonempty('Email обязателен').email('Неверный формат email'),
	password: z.string().nonempty('Пароль обязателен')
})

type SigninType = z.infer<typeof signinSchema>

const SignIn = () => {
	const route = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError
	} = useForm<SigninType>({
		resolver: zodResolver(signinSchema)
	})
	const [postUserSigninMutation] = usePostUserSigninMutation()
	const { translate } = useLanguageStore()

	const onSubmit: SubmitHandler<SigninType> = async data => {
		try {
			const { data: responseData } = await postUserSigninMutation(data)
			localStorage.setItem('user', JSON.stringify(responseData.accessToken))
		} catch (e) {
			const error = e as AxiosError
			console.log(error.response?.data)
		}
	}

	return (
		<div id={scss.SignIn}>
			<div className='container'>
				<div className={scss.signin}>
					<Link href="/" className={scss.signin_logo}>
						<Image src={logo} alt='' />
					</Link>
					<form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
						<div className={scss.for_inp}>
							<label htmlFor='email'>Email*</label>
							<input
								{...register('email', { required: true })}
								type='text'
								id='email'
							/>
							{errors.email && (
								<span className={scss.error}>{errors.email.message}</span>
							)}
						</div>
						<div className={scss.for_inp}>
							<label htmlFor='password'>Пароль*</label>
							<input
								{...register('password', { required: true })}
								type='text'
								id='password'
							/>
							{errors.password && (
								<span className={scss.error}>{errors.password.message}</span>
							)}
						</div>
						<div className={scss.buttons}>
							<button className={scss.sign_btn} type='submit'>
								{translate('Кирүү', 'Войти')}
							</button>
							<button
								className={scss.sign_btn2}
								onClick={() => route.push('/auth/signup')}
							>
								{translate('Сырсөзүңүздү унутуп калдыңыз', 'Забыли пароль')}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignIn
