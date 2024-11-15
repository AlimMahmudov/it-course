'use client'
import { useRouter } from 'next-nprogress-bar'
import { usePathname } from 'next/navigation'
import { FC, ReactNode, useCallback, useEffect } from 'react'
import { useGetMeQuery } from '../redux/api/user'
import { useRefreshMutation } from '../redux/api/auth'

interface SessionProviderProps {
	children: ReactNode
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
	const { status, isLoading, error } = useGetMeQuery()
	const [mutate] = useRefreshMutation()
	const pathname = usePathname()
	const router = useRouter()
	const refresh = useCallback(() => {
		const retry = JSON.parse(localStorage.getItem('retry')!)
		if (
			(error as any)?.status &&
			retry !== 'true' &&
			[403].includes((error as any)?.status)
		) {
			localStorage.setItem('retry', JSON.stringify('true'))
			mutate()
		}
	}, [error, isLoading, mutate])
	const handleNavigation = useCallback(() => {
		if (isLoading) return
		refresh()
		switch (pathname) {
			case '/auth/signin':
			case '/auth/signup':
			case '/':
				if (status === 'fulfilled') {
					router.push('/')
				}
				break
			case '/profile/personal':
			case '/profile/payment_cards':
			case '/profile/subscriptions':
			case '/profile/comments':
			case '/profile/my_purchases':
			case '/':
				if (status === 'rejected') {
					router.push('/auth/signin')
				}
				break
			default:
				break
		}
	}, [pathname, router, status, isLoading])

	useEffect(() => {
		handleNavigation()
	}, [handleNavigation, isLoading])

	return <>{isLoading ? <span>Загрузка...</span> : children}</>
}
