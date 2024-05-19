'use client'

import { BASE_IMAGE_URL } from '@/api/interceptors'
import IconUI from '@/components/ui/icon/Icon'
import Transition from '@/components/ui/transitions/Transition'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ChooseCourse.module.scss'
import { useCourses } from './hooks/useCourses'

const ChooseCourse = () => {
	const [isActive, setIsActive] = useState('')
	const [selected, setSelected] = useState<any>(null)
	const { dataCourses, isLoadingCourses, isErrorCourses, refetchCourses } =
		useCourses()

	return (
		<div className={styles.ChooseCourse}>
			<Transition>
				<div className='__container'>
					<h1>Давайте выберем курс специально для вас</h1>
					<div className={styles.buttons}>
						{dataCourses?.map(item => (
							<button
								key={item?.id}
								onClick={() => setSelected(item?.id)}
								className={`${styles.button} ${
									selected
										? selected === item?.id
											? styles.active
											: ''
										: item?.id === 1
										? styles.active
										: ''
								}`}
							>
								{item.title}
							</button>
						))}
					</div>
					{dataCourses?.map((item, index) => (
						<div className={styles.row} key={index}>
							{item?.courses?.map((course, i) => (
								<div key={i} className={styles.item}>
									<div className={styles.image}>
										<Image
											src={`${BASE_IMAGE_URL}/${course.cover_image.slice(43)}`}
											priority
											fill
											alt='course'
										/>
									</div>
									<div className={styles.content}>
										<h2>{course.title}</h2>
										{/* <p>{course.description}</p> */}
									</div>
									<div className={styles.footer}>
										<h4>{course.price}</h4>
										<div className={styles.details}>
											<span>Подробнее</span>
											<IconUI icon='arrowRightTop' />
										</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</Transition>
		</div>
	)
}

export default ChooseCourse
