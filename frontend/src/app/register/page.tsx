import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import Register from './Register'

export const metadata: Metadata = {
	title: `Регистрация ${SITE_NAME}`
}

const RegisterPage = () => {
	return (
		<div>
			<Register />
		</div>
	)
}

export default RegisterPage
