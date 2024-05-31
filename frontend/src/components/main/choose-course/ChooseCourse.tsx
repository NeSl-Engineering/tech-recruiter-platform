'use client'

import { BASE_IMAGE_URL } from '@/api/interceptors'
import IconUI from '@/components/ui/icon/Icon'
import Transition from '@/components/ui/transitions/Transition'
import { coursesService } from '@/services/courses.service'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import styles from './ChooseCourse.module.scss'
import ChooseCourseButtonShimmer from './components/shimmers/ChooseCourseButtonShimmer'
import ChooseCourseShimmer from './components/shimmers/ChooseCourseShimmer'
import { useCourses } from './hooks/useCourses'

const ChooseCourse = () => {
	const { dataCourses, isLoadingCourses, refetchCourses } = useCourses()
	const [selected, setSelected] = useState<number>(1)

	const handleClick = (e: any) => {
		setSelected(e.toString())

		setTimeout(() => {
			refetchId()
		}, 0)
	}

	const {
		data: dataId,
		isLoading: isLoadingId,
		refetch: refetchId
	} = useQuery({
		queryKey: ['choose-course'],
		queryFn: () => coursesService.getCoursesId(selected?.toString())
	})

	return (
		<div className={styles.ChooseCourse}>
			<Transition>
				<div className='__container'>
					<h1>Давайте выберем курс специально для вас</h1>
					<div className={styles.buttons}>
						{isLoadingCourses ? (
							<>
								<ChooseCourseButtonShimmer />
								<ChooseCourseButtonShimmer />
								<ChooseCourseButtonShimmer />
							</>
						) : (
							<>
								{dataCourses?.map(item => (
									<button
										key={item?.id}
										onClick={() => handleClick(item.id)}
										className={`${styles.button} ${
											item.id === Number(selected) ? styles.active : ''
										}`}
									>
										{item.title}
									</button>
								))}
							</>
						)}
					</div>
					<div className={styles.row}>
						{isLoadingId ? (
							<>
								<ChooseCourseShimmer />
								<ChooseCourseShimmer />
								<ChooseCourseShimmer />
							</>
						) : (
							<>
								{dataId?.courses?.length ? (
									<>
										{dataId.courses.map(course => (
											<div key={course.id} className={styles.item}>
												<div className={styles.image_default}>
													<img
														src={`${BASE_IMAGE_URL}/${course.cover_image.slice(
															43
														)}`}
														alt={course.title}
													/>
												</div>
												<div className={styles.content}>
													<h2>{course.title}</h2>
												</div>
												<div className={styles.footer}>
													<h4>{course.price} ₽</h4>
													<div className={styles.details}>
														<span>Подробнее</span>
														<IconUI icon='arrowRightTop' />
													</div>
												</div>
											</div>
										))}
									</>
								) : (
									'Пусто...'
								)}
							</>
						)}
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default ChooseCourse
