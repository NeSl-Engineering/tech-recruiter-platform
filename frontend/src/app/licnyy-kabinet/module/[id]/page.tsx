import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import TrainingPlanId from './ModulesLesson'

export const metadata: Metadata = {
	title: `Модули ${SITE_NAME}`
}

const page = ({ params }: { params: { id: string } }) => {
	return (
		<>
			<TrainingPlanId params={params} />
		</>
	)
}

export default page
