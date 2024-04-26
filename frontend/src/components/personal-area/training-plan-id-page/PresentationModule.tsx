import React from 'react'
import styles from './PresentationModuleId.module.scss'
import { modules } from './presentations.data'
import IconUI from '@/components/ui/icon/Icon'
import { Button } from '@/components/ui/buttons/Button'

const PresentationModuleId = () => {
	return (
		<div className={styles.PresentationModuleId}>
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
	)
}

export default PresentationModuleId