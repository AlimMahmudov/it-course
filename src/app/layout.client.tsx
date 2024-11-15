'use client'
import ReduxProvider from '@/shared/providers/ReduxProvider'
import { SessionProvider } from '@/shared/providers/SessionProvider'
import Effects from '@/shared/components/effects/Effects'
import React, { FC, ReactNode } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { QueryClientProvider } from '@tanstack/react-query'
import { query_client } from '@/shared/config/query-client'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
interface LayoutClientType {
	children: ReactNode
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
	return (
		<NuqsAdapter>
			<QueryClientProvider client={query_client}>
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
			</QueryClientProvider>
		</NuqsAdapter>
	)
}

export default LayoutClient
