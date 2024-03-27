import { Button } from '@/components/ui/buttons/Button'
import { MapCoursesData } from './MapCourses.data'
import styles from './MapCourses.module.scss'

const MapCourses = () => {
	return (
		<div className={styles.MapCourses}>
			<div className='__container'>
				<h1>Карта курсов в академии которая помогает достигать успеха 🧑🏼‍💼 </h1>
			</div>

			<div className={styles.rowWrapper}>
				<div className={styles.row}>
					{MapCoursesData.map((item, index) => (
						<div key={index} className={styles.item}>
							<h4 className={styles.step}>{item.step}</h4>
							<h2 className={styles.title}>{item.title}</h2>
							<div className={styles.footer}>
								<p className={styles.availability}>{item.availability}</p>
								<div className={styles.buttons}>
									<Button widthFull>Записаться</Button>
									<Button widthFull blueTransparent>
										Демо доступ
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MapCourses
