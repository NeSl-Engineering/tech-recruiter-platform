// import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import { Button } from '@/components/ui/buttons/Button'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import styles from './ProgressBlock.module.scss'

interface props {
	title: string
}

const ProgressBlock = (props: props) => {
	return (
		<div className={styles.ProgressBlock}>
			<h1 className={styles.title}>{props.title}</h1>
			<ProgressBar />
			<div className={styles.buttons}>
				<Button blueTransparent>Открыть демо-главу</Button>
				<Button>Купить полный доступ</Button>
			</div>
		</div>
	)
}

export default ProgressBlock
