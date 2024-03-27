'use client'

import { useState } from 'react'
import styles from './ChooseCourse.module.scss'
import { buttonCourses } from './ChooseCourses.data'

const ChooseCourse = () => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={styles.ChooseCourse}>
			<div className='__container'>
				<h1>Давайте выберем курс специально для вас</h1>
				<div className={styles.buttons}>
					{buttonCourses.map((item, index) => (
						<button
							key={index}
							onClick={() => setIsActive(true)}
							className={`${styles.button} ${
								isActive ? styles.button + ' ' + styles.active : ''
							}`}
						>
							{item.name}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default ChooseCourse
