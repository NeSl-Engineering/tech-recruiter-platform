import styles from './Shimmer.module.scss'

const Shimmer = ({ radius }: { radius?: string }) => {
	return <div className={styles.shimmer} style={{ borderRadius: radius }} />
}

export default Shimmer
