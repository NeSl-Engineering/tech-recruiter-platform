import { PERSONAL_AREA_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import PersonalAreaHome from './PersonalAreaHome'

export const metadata: Metadata = {
	title: `Главная ${PERSONAL_AREA_NAME}`
}

const PersonalAreaHomePage = () => {
	return (
		<>
			<PersonalAreaHome />
		</>
	)
}

export default PersonalAreaHomePage
