'use client'
import { useRouter } from 'next-nprogress-bar'
import { usePathname } from 'next/navigation'
import { FC, ReactNode, useCallback, useEffect } from 'react'
import { useGetMeQuery } from '../redux/api/user'
import { useRefreshMutation } from '../redux/api/auth'
import Preloader from '../components/preloader/Preloader'

interface SessionProviderProps {
	children: ReactNode
}
const privateRoutes: string[] = ['/profile/*']

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
	const { status, isLoading, error, data } = useGetMeQuery()
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
		const isAuthenticated = !!data
		const isPrivateRoute = privateRoutes.some(path => pathname.match(path))

		if (!isAuthenticated && isPrivateRoute) {
			router.push(`/auth/signin?from=${pathname}`)
		}

		if (isAuthenticated && pathname.includes('auth')) {
			router.push(`/`)
		}
	}, [pathname, router, status, isLoading])

	useEffect(() => {
		handleNavigation()
	}, [handleNavigation, isLoading])

	return <>{isLoading ? <Preloader/> : children}</>
}
