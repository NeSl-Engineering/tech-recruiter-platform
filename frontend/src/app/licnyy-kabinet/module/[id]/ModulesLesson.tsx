'use client'

import PresentationModuleId from '@/components/personal-area/training-plan-id-page/PresentationModule'
import { useLesson } from '../../course/hooks/useLesson'
import styles from './ModulesLesson.module.scss'
import StrategySourcing from './components/strategy-sourcing/StrategySourcing'
import { useModuleSlug } from './hooks/useModuleSlug'

const TrainingPlanId = ({ params }: { params: { id: string } }) => {
	const { data, isLoading } = useLesson(params.id)
	const { dataModuleSlug, isLoadingModuleSlug } = useModuleSlug(params.id)
	return (
		<div className={styles.TrainingPlanId}>
			<PresentationModuleId />
			<StrategySourcing data={data} dataModule={dataModuleSlug} />
		</div>
	)
}

export default TrainingPlanId
