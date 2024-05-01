import type { Metadata } from 'next'

import { SITE_NAME } from '@/constants/seo.constants'
import { Toaster } from 'react-hot-toast'
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
					<Toaster position='top-right' />
				</Providers>
			</body>
		</html>
	)
}
