import MainModules from '@/components/personal-layout/main-modules/MainModules'
import MyProfession from '@/components/personal-layout/my-profession/MyProfession'
import PresentationModule from '@/components/personal-layout/presentation-module/PresentationModule'
import styles from './TrainingPlan.module.scss'

const TrainingPlan = () => {
	return (
		<div className={styles.TrainingPlan}>
			<div className={styles.row}>
				<MyProfession />
				<PresentationModule />
				<MainModules />
			</div>
		</div>
	)
}

export default TrainingPlan
