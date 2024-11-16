'use client'
import logo from '@/shared/assets/logo.svg'
import { useLoginMutation } from '@/shared/redux/api/auth'
import { useLanguageStore } from '@/shared/stores/Language'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next-nprogress-bar'
import Image from 'next/image'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

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
		reset
	} = useForm<SigninType>({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			password: 'Islam-2007',
			email: 'islam.janybekov.007@gmail.com'
		}
	})
	const [login, { error }] = useLoginMutation()
	const { translate } = useLanguageStore()
	const response = error as unknown as { data: any }

	const onSubmit: SubmitHandler<SigninType> = async data => {
		const { data: responseData } = await login(data)
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
				route.push('/')
			}
		}
	}

	return (
		<div id={'BaseForm'}>
			<div className='container'>
				<div className={'BaseForm auth'}>
					<Link href='/' className={'signin_logo'}>
						<Image src={logo} alt='' />
					</Link>
					<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
						<div className={'for_inp'}>
							<label htmlFor='email'>Email*</label>
							<input
								{...register('email', { required: true })}
								type='text'
								id='email'
							/>
							{errors.email && (
								<span className={'error'}>{errors.email.message}</span>
							)}
						</div>
						<div className={'for_inp'}>
							<label htmlFor='password'>Пароль*</label>
							<input
								{...register('password', { required: true })}
								type='password'
								id='password'
							/>
							{errors.password && (
								<span className={'error'}>{errors.password.message}</span>
							)}
						</div>
						<div className={'buttons'}>
							<button className={'sign_btn'} type='submit'>
								{translate('Кирүү', 'Войти')}
							</button>
							<button
								type='button'
								className={'sign_btn2'}
								onClick={() => route.push('/auth/forgot-pass')}
							>
								{translate('Сырсөзүңүздү унутуп калдыңыз', 'Забыли пароль')}
							</button>
						</div>
						{response?.data?.detail && <p>{response.data.detail}</p>}
						<p className={'cn'}>
							Нет учетной записи ?{' '}
							<Link href='/auth/signup'>Зарегестрироватся</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignIn
