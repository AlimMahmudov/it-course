'use client'
import ReduxProvider from '@/shared/providers/ReduxProvider'
import { SessionProvider } from '@/shared/providers/SessionProvider'
import React, { FC, ReactNode } from 'react'

interface LayoutClientType {
	children: ReactNode
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
	return (
		<ReduxProvider>
			<SessionProvider>{children}</SessionProvider>
		</ReduxProvider>
	)
}

export default LayoutClient
