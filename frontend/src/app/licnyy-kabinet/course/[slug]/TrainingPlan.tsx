'use client'

import MainModules from '@/components/personal-area/main-modules/MainModules'
import MyProfession from '@/components/personal-area/my-profession/MyProfession'
import PresentationModule from '@/components/personal-area/presentation-module/PresentationModule'
import { useModule } from '../hooks/useModule'
import styles from './TrainingPlan.module.scss'
import { useCourseSlug } from '../hooks/useCourseSlug'

const TrainingPlan = ({ params }: { params: { slug: any } }) => {
	const { data, isLoading } = useModule(params.slug)
	const { dataCourseSlug, isLoadingCourseSlug } = useCourseSlug(params.slug)

	return (
		<div className={styles.TrainingPlan}>
			<div className={styles.row}>
				<MyProfession data={dataCourseSlug}/>
				<PresentationModule />
				<MainModules data={data} id={params.slug} />
			</div>
		</div>
	)
}

export default TrainingPlan
