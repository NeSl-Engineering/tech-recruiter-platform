import IconUI from '@/components/ui/icon/Icon'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import Link from 'next/link'
import { mainModules } from './main-modules.data'
import styles from './MainModules.module.scss'

const MainModules = () => {
	return (
		<div className={styles.MainModules}>
			<h1 className={styles.title}>Основные модули курса</h1>
			<p className={styles.description}>Освоить базовые навыки легко.</p>
			<ul className={styles.list}>
				{mainModules.map((item, index) => (
					<li key={index} className={styles.item}>
						<Link
							href={`/licnyy-kabinet/plan-obuceniya/${index + 1}`}
							className={styles.link}
						>
							<div className={styles.left}>
								<div className={styles.numeration}>{index + 1}</div>
								<div className={styles.content}>
									<h2 className={styles.itemTitle}>{item.title}</h2>
									<h3 className={styles.author}>{item.author}</h3>
								</div>
							</div>
							<div className={styles.right}>
								<div className={styles.progressBarWrapper}>
									<ProgressBar />
								</div>
								<div className={styles.icon}>
									<IconUI icon='arrowRight' />
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MainModules
