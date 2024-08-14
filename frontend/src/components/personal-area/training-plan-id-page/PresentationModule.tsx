import { Button } from '@/components/ui/buttons/Button'
import IconUI from '@/components/ui/icon/Icon'
import styles from './PresentationModuleId.module.scss'
import { modules } from './presentations.data'
import { ICourse } from '@/types/types'
import { IPresentation } from '@/types/module.types'
import { Link } from 'lucide-react'

const PresentationModuleId = ({data}: {data?: IPresentation[]}) => {
	return (
		<div className={styles.PresentationModuleId}>
			<h2 className={styles.title}>ПРЕЗЕНТАЦИИ К ОТКРЫТЫМ МОДУЛЯМ</h2>
			<ul className={styles.list}>
						<>
							{data?.length && (
								<>
									{data?.map((item, index) => (
										<>
											{item?.file?.length > 0 ? (
												<Link
													href={item.file}
													key={index}
													className={styles.item}
												>
													<h3 className={styles.name}>{item?.title}</h3>
													<div className={styles.icon}>
														<IconUI icon='download' />
													</div>
												</Link>
											) : (
												<Link
													href={item.link}
													key={index}
													className={styles.item}
												>
													<h3 className={styles.name}>{item?.title}</h3>
													<div className={styles.icon}>
														<IconUI icon='download' />
													</div>
												</Link>
											)}
										</>
									))}
								</>
							)}
						</>
					</ul>
			<Button>Посмотреть все презентации</Button>
		</div>
	)
}

export default PresentationModuleId
