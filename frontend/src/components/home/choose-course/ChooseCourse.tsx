'use client'

import IconUI from '@/components/ui/icon/Icon'
import Transition from '@/components/ui/transitions/Transition'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ChooseCourse.module.scss'
import { buttonCourses, COURSES } from './ChooseCourses.data'

const ChooseCourse = () => {
	const [isActive, setIsActive] = useState('')

	return (
		<div className={styles.ChooseCourse}>
			<Transition>
				<div className='__container'>
					<h1>Давайте выберем курс специально для вас</h1>
					<div className={styles.buttons}>
						{buttonCourses.map((item, index: any) => (
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
						{COURSES.map((item, index) => (
							<div key={index} className={styles.item}>
								<div className={styles.image}>
									<Image src={item.img} fill alt='course' />
								</div>
								<div className={styles.content}>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
								<div className={styles.footer}>
									<h4>{item.price}</h4>
									<div className={styles.details}>
										<span>Подробнее</span>
										<IconUI icon='arrowRightTop' />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default ChooseCourse
