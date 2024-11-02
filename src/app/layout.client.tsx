'use client'
import ReduxProvider from '@/shared/providers/ReduxProvider'
import { SessionProvider } from '@/shared/providers/SessionProvider'
import Effects from '@/shared/ui/effects/Effects'
import React, { FC, ReactNode } from 'react'

interface LayoutClientType {
	children: ReactNode
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
	return (
		<ReduxProvider>
			<Effects />
			<SessionProvider>{children}</SessionProvider>
		</ReduxProvider>
	)
}

export default LayoutClient
