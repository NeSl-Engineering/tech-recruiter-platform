import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import Login from './Login'

export const metadata: Metadata = {
	title: `Логин ${SITE_NAME}`
}

const LoginPage = () => {
	return (
		<div>
			<Login />
		</div>
	)
}

export default LoginPage
