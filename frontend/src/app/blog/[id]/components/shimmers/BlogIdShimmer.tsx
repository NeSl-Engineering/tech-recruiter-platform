import Shimmer from '@/components/ui/shimmer/Shimmer'
import styles from './BlogIdShimmer.module.scss'

const BlogIdShimmer = () => {
	return (
		<div className={styles.BlogIdShimmer}>
			<div className={styles.image}>
				<Shimmer radius='10px' />
			</div>
		</div>
	)
}

export default BlogIdShimmer
