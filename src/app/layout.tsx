import type { Metadata } from 'next'
import './globals.scss'
import LayoutClient from './layout.client'

export const metadata: Metadata = {
	title: 'IT образовательная платформа',
	description:
		'Наша образовательная платформа вам даст необходимые практические знания для адаптации в IT-сфере.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<div className='wrapper'>
					<LayoutClient>{children}</LayoutClient>
				</div>
			</body>
		</html>
	)
}

// Montserrat
