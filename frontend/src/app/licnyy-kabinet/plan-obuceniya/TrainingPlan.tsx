'use client'

import MainModules from '@/components/personal-area/main-modules/MainModules'
import MyProfession from '@/components/personal-area/my-profession/MyProfession'
import PresentationModule from '@/components/personal-area/presentation-module/PresentationModule'
import styles from './TrainingPlan.module.scss'
import { useModule } from './hooks/useModule'

const TrainingPlan = () => {
	const { data, isLoading } = useModule()
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
