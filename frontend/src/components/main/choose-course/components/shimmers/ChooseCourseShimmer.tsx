import Shimmer from '@/components/ui/shimmer/Shimmer'
import styles from './ChooseCourseShimmer.module.scss'

const ChooseCourseShimmer = () => {
	return (
		<div className={styles.ChooseCourseShimmer}>
			<div className={styles.image}>
				<Shimmer />
			</div>
			<div className={styles.content}>
				<h2>
					<Shimmer />
				</h2>
				<div>
					<Shimmer />
				</div>
			</div>
			<div className={styles.footer}>
				<h4>
					<Shimmer />
				</h4>
				<div className={styles.details}>
					<Shimmer />
				</div>
			</div>
		</div>
	)
}

export default ChooseCourseShimmer
