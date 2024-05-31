import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import styles from './ProgressBlock.module.scss'

const ProgressBlock = () => {
	return (
		<div className={styles.progressBlock}>
			<h2 className={styles.title}>Мой Прогресс</h2>
			<p className={styles.description}>
				Отслеживать свой прогресс теперь легче!
			</p>
			<div className={styles.progresses}>
				<ProgressBar />
				<ProgressBar />
				<ProgressBar />
			</div>
		</div>
	)
}

export default ProgressBlock
