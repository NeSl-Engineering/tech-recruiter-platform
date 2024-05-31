import IconUI from '@/components/ui/icon/Icon'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import { LK_PAGES } from '@/config/lk-pages-url.config'
import { IModule } from '@/types/module.types'
import Link from 'next/link'
import styles from './MainModules.module.scss'

const MainModules = ({ data, id }: { data?: IModule[]; id: string }) => {
	return (
		<div className={styles.MainModules}>
			<h1 className={styles.title}>Основные модули курса</h1>
			<p className={styles.description}>Освоить базовые навыки легко.</p>
			<ul className={styles.list}>
				{data?.map((item, index) => (
					<li key={index} className={styles.item}>
						<Link
							href={`${LK_PAGES.PLAN}/${id}/${item.id}`}
							className={styles.link}
						>
							<div className={styles.left}>
								<div className={styles.numeration}>{index + 1}</div>
								<div className={styles.content}>
									<h2 className={styles.itemTitle}>{item.title}</h2>
									<h3 className={styles.author}>AUTOR BOLMALY</h3>
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
