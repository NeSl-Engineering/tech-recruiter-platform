import { Button } from '@/components/ui/buttons/Button'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import { ICourse } from '@/types/types'
import styles from './MyProfession.module.scss'

const MyProfession = ({ data }: { data?: ICourse }) => {
	return (
		<div className={styles.myProfession}>
			<div className={styles.left}>
				<h3 className={styles.subTitle}>Моя профессия</h3>
				<h1 className={styles.title}>{data?.title}</h1>
				{/* <ProgressBar /> */}
			</div>
			<div className={styles.right}>
				<Button blueTransparent>Купить предзапись</Button>
				<Button>Купить полный доступ</Button>
			</div>
		</div>
	)
}

export default MyProfession
