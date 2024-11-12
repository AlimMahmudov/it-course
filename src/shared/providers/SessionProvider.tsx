'use client'
import { useRouter } from 'next-nprogress-bar'
import { usePathname } from 'next/navigation'
import { FC, ReactNode, useCallback, useEffect } from 'react'
import { useGetMeQuery } from '../redux/api/user'

interface SessionProviderProps {
	children: ReactNode
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
	const { status, isLoading } = useGetMeQuery()
	const pathname = usePathname()
	const router = useRouter()

	const handleNavigation = useCallback(() => {
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
	}, [pathname, router, status])

	useEffect(() => {
		handleNavigation()
	}, [handleNavigation])

	return <>{isLoading ? <span>Загрузка...</span> : children}</>
}
