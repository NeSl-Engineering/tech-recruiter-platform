import { PERSONAL_AREA_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import ChangePassword from './ChangePassword'

export const metadata: Metadata = {
	title: `Изменить пароль ${PERSONAL_AREA_NAME}`
}

const ChangePasswordPage = () => {
	return <ChangePassword />
}

export default ChangePasswordPage
