import IconUI from '@/components/ui/icon/Icon'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import Link from 'next/link'
import styles from './ProgressId.module.scss'

const ProgressId = () => {
	return (
		<div className={styles.progressId}>
			<section className={styles.courses}>
				<ul className={styles.list}>
					<h1 className={styles.title}>Курсы</h1>
					<Link href='/licnyy-kabinet/home' className={styles.item}>
						<div className={styles.sourcing}>
							<h2 className={styles.titleSourcing}>Продвинутый сорсинг</h2>
							<ProgressBar />
						</div>
						<div className={styles.navigation}>
							<IconUI icon='arrowRight' />
						</div>
					</Link>
				</ul>
			</section>
		</div>
	)
}

export default ProgressId
