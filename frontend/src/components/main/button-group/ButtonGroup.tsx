'use client'

import { IBlogTag } from '@/types/types'
import { useState } from 'react'
import styles from './ButtonGroup.module.scss'

const ButtonGroup = ({ data }: { data?: IBlogTag[] }) => {
	const [selected, setSelected] = useState<any>(null)

	const handleClick = (e: any) => {
		setSelected(e)
		setTimeout(() => {}, 0)
	}

	return (
		<div className={styles.buttonGroup}>
			<div className='__container'>
				<div className={styles.row}>
					<button
						className={`${styles.button} ${selected > 0 ? '' : styles.active}`}
						onClick={() => setSelected(null)}
					>
						Все статьи
					</button>
					{data?.map(item => (
						<button
							key={item.id}
							onClick={() => handleClick(item.id)}
							className={`${styles.button} ${
								item.id === selected ? styles.active : ''
							}`}
						>
							{item.title}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default ButtonGroup
