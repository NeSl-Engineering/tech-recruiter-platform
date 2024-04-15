import { PERSONAL_AREA_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import PersonalArea from './PersonalArea'

export const metadata: Metadata = {
	title: `Главная ${PERSONAL_AREA_NAME}`
}

const PersonalAreaPage = () => {
	return (
		<>
			<PersonalArea />
		</>
	)
}

export default PersonalAreaPage
