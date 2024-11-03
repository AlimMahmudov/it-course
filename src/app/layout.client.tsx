'use client'
import ReduxProvider from '@/shared/providers/ReduxProvider'
import { SessionProvider } from '@/shared/providers/SessionProvider'
import Effects from '@/shared/ui/effects/Effects'
import React, { FC, ReactNode } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

interface LayoutClientType {
	children: ReactNode
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
	return (
		<ReduxProvider>
			<Effects />
			<ProgressBar
				height='4px'
				color='#034078'
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<SessionProvider>{children}</SessionProvider>
		</ReduxProvider>
	)
}

export default LayoutClient
