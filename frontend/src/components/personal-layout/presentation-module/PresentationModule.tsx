import { Button } from '@/components/ui/buttons/Button'
import IconUI from '@/components/ui/icon/Icon'
import styles from './PresentationModule.module.scss'
import { modules, sendersPage } from './presentations.data'

const PresentationModule = () => {
	return (
		<div className={styles.PresentationModule}>
			<div className={styles.row}>
				<div className={styles.left}>
					<h2 className={styles.title}>ПРЕЗЕНТАЦИИ К ОТКРЫТЫМ МОДУЛЯМ</h2>
					<ul className={styles.list}>
						{modules.map((item, index) => (
							<li key={index} className={styles.item}>
								<h3 className={styles.name}>{item.name}</h3>
								<div className={styles.icon}>
									<IconUI icon={item.icon} />
								</div>
							</li>
						))}
					</ul>
					<Button>Посмотреть все презентации</Button>
				</div>
				<div className={styles.right}>
					{sendersPage.map((item, index) => (
						<a href={item.url} key={index} className={styles.item}>
							<h2 className={styles.title}>{item.title}</h2>
							<div className={styles.icon}>
								<IconUI icon='arrowRightTopMini' />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default PresentationModule
