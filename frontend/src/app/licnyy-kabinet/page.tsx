import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: `Главная ЛИЧНЫЙ КАБИНЕТ ${SITE_NAME}`
}

const PersonalAreaPage = () => {
	return <div>LicnyyKabinetPage</div>
}

export default PersonalAreaPage
