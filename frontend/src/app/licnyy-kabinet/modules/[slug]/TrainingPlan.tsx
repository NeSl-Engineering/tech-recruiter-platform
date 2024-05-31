'use client'

import MainModules from '@/components/personal-area/main-modules/MainModules'
import MyProfession from '@/components/personal-area/my-profession/MyProfession'
import PresentationModule from '@/components/personal-area/presentation-module/PresentationModule'
import { useModule } from '../hooks/useModule'
import styles from './TrainingPlan.module.scss'

const TrainingPlan = ({ params }: { params: { slug: any } }) => {
	const { data, isLoading } = useModule(params.slug)

	return (
		<div className={styles.TrainingPlan}>
			<div className={styles.row}>
				<MyProfession />
				<PresentationModule />
				<MainModules data={data} id={params.slug} />
			</div>
		</div>
	)
}

export default TrainingPlan
