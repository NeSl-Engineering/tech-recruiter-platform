import styles from './ProgressBar.module.scss'

const ProgressBar = () => {
	return (
		<div className={styles.ProgressBar}>
			<div className={styles.row}>
				<h1 className={styles.title}>Мой прогресс</h1>
				<div className={styles.number}>5/9</div>
			</div>
			<div className={styles.progress}></div>
		</div>
	)
}

export default ProgressBar
