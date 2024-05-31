import Shimmer from '@/components/ui/shimmer/Shimmer'
import styles from './ChooseCourseShimmer.module.scss'

const ChooseCourseButtonShimmer = () => {
	return (
		<div className={styles.button}>
			<Shimmer radius='100px'/>
		</div>
	)
}

export default ChooseCourseButtonShimmer
