import { PERSONAL_AREA_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import TrainingPlan from './TrainingPlan'

export const metadata: Metadata = {
	title: `Модули ${PERSONAL_AREA_NAME}`,
	description: 'Планируйте свое обучение!'
}

const TrainingPlanPage = ({ params }: { params: { slug: any } }) => {
	return (
		<>
			<TrainingPlan params={params} />
		</>
	)
}

export default TrainingPlanPage
