'use client'

import { useState } from 'react'
import { buttonTimeTable, TIMETABLE } from './TimeTable.data'
import styles from './TimeTable.module.scss'

const TimeTable = () => {
	const [isActive, setIsActive] = useState('')
	const [isDateNow, setIsDateNow] = useState(true)

	return (
		<div className={styles.TimeTable}>
			<div className='__container'>
				<h1>Time-table что бы не пропустить наши события</h1>
				<div className={styles.buttons}>
					{buttonTimeTable.map((item, index: any) => (
						<button
							key={index}
							onClick={() => setIsActive(index)}
							className={`${styles.button} ${
								isActive
									? isActive === index
										? styles.active
										: ''
									: index === 0
									? styles.active
									: ''
							}`}
						>
							{item.name}
						</button>
					))}
				</div>
				<div className={styles.row}>
					{TIMETABLE.map((item, index) => (
						<div key={index} className={styles.item}>
							<div
								className={`${
									isDateNow === item.dateNow ? styles.dateActive : ''
								}`}
							>
								<h3>{item.index}</h3>
							</div>
							<h2>{item.text}</h2>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TimeTable
