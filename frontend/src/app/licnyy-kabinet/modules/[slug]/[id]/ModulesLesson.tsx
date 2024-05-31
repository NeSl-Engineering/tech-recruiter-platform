import PresentationModuleId from '@/components/personal-area/training-plan-id-page/PresentationModule'
import styles from './ModulesLesson.module.scss'
import StrategySourcing from './components/strategy-sourcing/StrategySourcing'

const TrainingPlanId = () => {
	return (
		<div className={styles.TrainingPlanId}>
			<PresentationModuleId />
			<StrategySourcing />
		</div>
	)
}

export default TrainingPlanId
