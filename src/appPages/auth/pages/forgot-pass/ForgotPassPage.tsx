'use client'
import logo from '@/shared/assets/logo.svg'
import { useForgotPassMutation } from '@/shared/redux/api/auth'
import { useLanguageStore } from '@/shared/stores/Language'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next-nprogress-bar'
import Image from 'next/image'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPassSchema = z.object({
	email: z.string().nonempty('Email обязателен').email('Неверный формат email')
})

type ForgotPasType = z.infer<typeof forgotPassSchema>

const ForgotPassPage = () => {
	const route = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ForgotPasType>({
		resolver: zodResolver(forgotPassSchema)
	})
	const [forgotPass, { error }] = useForgotPassMutation()
	const { translate } = useLanguageStore()
	const response = error as unknown as { data: any }

	const onSubmit: SubmitHandler<ForgotPasType> = async data => {
		const clientUrl = `${window.location.origin}/auth/reset-pass`
		const { data: responseData } = await forgotPass({ ...data, clientUrl })
		if (responseData && responseData.message) {
			alert(responseData.message)
			route.push('/auth/signin')
		}
	}

	return (
		<div id={'BaseForm'}>
			<div className='container'>
				<div className={'Auth'}>
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
						<button className={'sign_btn'} type='submit'>
							{translate('Жөнөтүү', 'Отправить')}
						</button>
						{response?.data && response?.data?.detail && (
							<p>{response.data.detail}</p>
						)}
						<p className={'cn'}>
							Вспомнили или нашли свой пароль ?{' '}
							<Link href='/auth/signin'>Войти</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassPage
