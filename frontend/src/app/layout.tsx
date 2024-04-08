import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import { SITE_NAME } from '@/constants/seo.constants'
import './globals.scss'
import { Providers } from './providers'

export const metadata: Metadata = {
	title: SITE_NAME,
	description: `${SITE_NAME} online courses`
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					{children}
					<Toaster theme='dark' position='bottom-right' duration={1500} />
				</Providers>
			</body>
		</html>
	)
}
