import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import PersonalArea from './PersonalArea'

export const metadata: Metadata = {
	title: `Главная ЛИЧНЫЙ КАБИНЕТ ${SITE_NAME}`
}

const PersonalAreaPage = () => {
	return (
		<>
			<PersonalArea />
		</>
	)
}

export default PersonalAreaPage
