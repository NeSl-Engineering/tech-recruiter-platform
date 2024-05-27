'use client'

import { useState } from 'react'
import { buttonGroupData } from './ButtonGroup.data'
import styles from './ButtonGroup.module.scss'

const ButtonGroup = () => {
	const [selected, setSelected] = useState<number>(1)

	const handleClick = (e: any) => {
		setSelected(e.toString())

		setTimeout(() => {}, 0)
	}
	return (
		<div className={styles.buttonGroup}>
			<div className='__container'>
				<div className={styles.row}>
					{buttonGroupData?.map((item, index) => (
						<button
							key={index}
							onClick={() => handleClick(index)}
							className={`${styles.button} ${
								index === Number(selected) ? styles.active : ''
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
