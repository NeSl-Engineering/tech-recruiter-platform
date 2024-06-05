'use client'

import { Button } from '@/components/ui/buttons/Button'
import IconUI from '@/components/ui/icon/Icon'
import { IModule } from '@/types/module.types'
import { ILesson } from '@/types/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './StrategySourcing.module.scss'

const StrategySourcing = ({
	data,
	dataModule
}: {
	data?: ILesson[]
	dataModule?: IModule
}) => {
	const [isDropdown, setIsDropdown] = useState(false)

	const handleClickDropdown = (index: any) => {
		setIsDropdown(index)
	}

	const router = useRouter()

	return (
		<div className={styles.StrategySourcing}>
			<h1 className={styles.title}>{dataModule?.title}</h1>
			<p className={styles.description}>Освоить базовые навыки легко.</p>
			<ul className={styles.list}>
				{data?.map((item, index: any) => (
					<li
						key={index}
						className={`${styles.item} ${item?.seen ? styles.seen : ''} ${
							isDropdown === index ? styles.open : ''
						}`}
					>
						<div
							onClick={() => handleClickDropdown(index)}
							className={styles.itemRow}
						>
							<div className={styles.numeration}>
								<span>{index + 1}</span>
							</div>
							<h2 className={styles.titleItem}>{item.title}</h2>
							<div className={styles.icon}>
								<IconUI icon='arrowRight' />
							</div>
						</div>
						<ul
							className={styles.subList}
							onClick={() => setIsDropdown(current => !current)}
						>
							<li className={styles.subItem} onClick={e => e.stopPropagation()}>
								<div className={styles.video}>
									{/* <img src={item.video} alt={item.title} /> */}
									<video src={item.video} controls></video>
								</div>
							</li>
							<div className={styles.buttonWrapper}>
								<Button
									widthFull
									onClick={() =>
										router.push(`/licnyy-kabinet/lesson/${item.id}`)
									}
								>
									Пройти тесты
								</Button>
							</div>
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default StrategySourcing
