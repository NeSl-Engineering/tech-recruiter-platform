import { PERSONAL_AREA_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import TrainingPlan from './TrainingPlan'

export const metadata: Metadata = {
	title: `Главная ${PERSONAL_AREA_NAME}`,
	description: 'Планируйте свое обучение!'
}

const TrainingPlanPage = () => {
	return (
		<>
			<TrainingPlan />
		</>
	)
}

export default TrainingPlanPage
