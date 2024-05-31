import { Metadata } from 'next'
import Progress from './Progress'
import { PERSONAL_AREA_NAME } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: `Главная ${PERSONAL_AREA_NAME}`,
	description: 'Планируйте свое обучение!'
}

const ProgressPage = () => {
	return (
		<>
			<Progress />
		</>
	)
}

export default ProgressPage
