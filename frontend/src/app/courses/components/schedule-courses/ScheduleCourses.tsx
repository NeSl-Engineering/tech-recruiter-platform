import { ScheduleCoursesData } from './schedule-courses.data'
import styles from './ScheduleCourses.module.scss'

const ScheduleCourses = () => {
	return (
		<div className={styles.ScheduleCourses}>
			<h1 className={styles.title}>Расписание курса</h1>
			<div className={styles.row}>
				{ScheduleCoursesData.map((item, index) => (
					<div key={index} className={styles.items}>
						<div className={styles.weekItem}>
							<h1 className={styles.title}>{item.week}</h1>
						</div>
						{item.courses.map(course => (
							<div className={styles.item}>
								<h1 className={styles.title}>{course.day}</h1>
								<p className={styles.description}>{course.title}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default ScheduleCourses
