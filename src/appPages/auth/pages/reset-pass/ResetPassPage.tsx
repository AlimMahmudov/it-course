'use client'
import logo from '@/shared/assets/logo.svg'
import { useLanguageStore } from '@/shared/stores/Language'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { useRouter } from 'next-nprogress-bar'
import { useResetPassMutation } from '@/shared/redux/api/auth'
import { useSearchParams } from 'next/navigation'

const resetPassSchema = z
	.object({
		password: z
			.string()
			.min(8, { message: 'Пароль должен содержать минимум 8 символов' }),
		confirmPassword: z.string().min(8, {
			message: 'Подтверждающий пароль должен содержать не менее 8 символов'
		})
	})
	.refine(v => v.confirmPassword === v.password, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword']
	})

type ResetPassType = z.infer<typeof resetPassSchema>

const ResetPassPage = () => {
	const route = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ResetPassType>({
		resolver: zodResolver(resetPassSchema)
	})
	const searchParams = useSearchParams()
	const resetToken = String(searchParams.get('resetToken'))
	const [forgotPass, { error }] = useResetPassMutation()
	const { translate } = useLanguageStore()
	const response = error as unknown as { data: any }

	const onSubmit: SubmitHandler<ResetPassType> = async data => {
		const { data: responseData } = await forgotPass({
			newPass: data.password,
			resetToken
		})
		if (responseData && responseData.message) {
			alert(responseData.message)
			route.push('/auth/signin')
		}
	}

	return (
		<div id={'Auth'}>
			<div className='container'>
				<div className={'Auth'}>
					<Link href='/' className={'signin_logo'}>
						<Image src={logo} alt='' />
					</Link>
					<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
						<div className={'for_inp'}>
							<label htmlFor='password'>Password*</label>
							<input
								{...register('password', { required: true })}
								type='password'
								id='password'
							/>
							{errors.password && (
								<span className={'error'}>{errors.password.message}</span>
							)}
						</div>
						<div className={'for_inp'}>
							<label htmlFor='confirmPassword'>Confirm Password*</label>
							<input
								{...register('confirmPassword', { required: true })}
								type='password'
								id='confirmPassword'
							/>
							{errors.confirmPassword && (
								<span className={'error'}>
									{errors.confirmPassword.message}
								</span>
							)}
						</div>
						<button className={'sign_btn'} type='submit'>
							{translate('өзгөртүү', 'Изменить')}
						</button>
						{response?.data && response?.data?.detail && (
							<p>{response.data.detail}</p>
						)}
					</form>
				</div>
			</div>
		</div>
	)
}

export default ResetPassPage
