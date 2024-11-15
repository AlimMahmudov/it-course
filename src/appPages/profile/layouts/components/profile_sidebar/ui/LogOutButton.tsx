'use client'
import { useLogoutMutation } from '@/shared/redux/api/auth'
import ConfirmModal from '@/shared/components/confirm_modal/ConfirmModal'
import { useRouter } from 'next-nprogress-bar'
import React, { useCallback } from 'react'
import { useToggle } from 'usehooks-ts'

const LogOutButton: React.FC = () => {
	const [open, toggle, set] = useToggle(false)
	const [mutate, { error }] = useLogoutMutation()
	const router = useRouter()
	const confirmCallback = useCallback(async () => {
		const { data,  } = await mutate()
		if (data?.message) {
			alert(data?.message)
			router.push('/')
		}
	}, [router, mutate])
	return (
		<>
			<button onClick={toggle}>
				<span>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M14.25 15.749V17.624C14.25 18.1213 14.0525 18.5982 13.7008 18.9499C13.3492 19.3015 12.8723 19.499 12.375 19.499H4.875C4.37772 19.499 3.90081 19.3015 3.54917 18.9499C3.19754 18.5982 3 18.1213 3 17.624L3 6.37402C3 5.87674 3.19754 5.39983 3.54917 5.0482C3.90081 4.69657 4.37772 4.49902 4.875 4.49902H12C13.0355 4.49902 14.25 5.33855 14.25 6.37402V8.24902'
							stroke='black'
							strokeWidth='1.62772'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M17.25 15.7511L21.0005 12.0005L17.25 8.25'
							stroke='black'
							strokeWidth='1.62772'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8.24805 12H20.248'
							stroke='black'
							strokeWidth='1.62772'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</span>
				<span>Выйти</span>
			</button>
			{open && (	
				<ConfirmModal
					error={error as any}
					text='Действительно хотите выйти или нет?'
					confirm_callback={confirmCallback}
					onClose={() => set(false)}
				/>
			)}
		</>
	)
}

export default LogOutButton
