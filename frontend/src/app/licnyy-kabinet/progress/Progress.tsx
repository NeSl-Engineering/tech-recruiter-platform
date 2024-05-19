import ProfileBlock from './components/profile-block/ProfileBlock'
import ProgressBlock from './components/progress-block/ProgressBlock'
import styles from './Progress.module.scss'

const Progress = () => {
	return (
		<div className={styles.progress}>
			<div className={styles.row}>
				<ProfileBlock />
				<ProgressBlock />
			</div>
		</div>
	)
}

export default Progress
