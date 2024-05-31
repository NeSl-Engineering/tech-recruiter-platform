'use client'

import ProgressBlock from '@/components/personal-area/progress-block/ProgressBlock'
import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import styles from './PersonalAreaHome.module.scss'
import { useCourses } from './hooks/useCourses'
import { useCoursesDemo } from './hooks/useCoursesDemo'

const PersonalAreaHome = () => {
	const { data, isLoading } = useCourses()
	const { dataDemo, isLoadingDemo } = useCoursesDemo()

	return (
		<div className={styles.PersonalArea}>
			{data?.length ? (
				<div className={styles.ourCourses}>
					<h1 className={styles.title}>Мои курсы</h1>
					<div className={styles.row}>
						<>
							{data?.map(item => (
								<ProgressBlock key={item.id} data={item} />
							))}
						</>
					</div>
				</div>
			) : null}
			<div className={styles.demoAccess}>
				<h1 className={styles.title}>Демо доступы</h1>
				<div className={styles.row}>
					<>
						{dataDemo?.map(item => (
							<ProgressBlock key={item.id} data={item} />
						))}
					</>
				</div>
			</div>
			<div className={styles.haveQuestion}>
				<div className={styles.content}>
					<h1 className={styles.titleContent}>
						Остались вопросы? <br /> Напишите в наш чат телеграмм.
					</h1>
					<div className={styles.buttonWrapper}>
						<Button widthFull>Написать в телеграм</Button>
					</div>
				</div>
				<div className={styles.qrCode}>
					<Image src='/qr-code.svg' alt='qrCode' fill />
				</div>
			</div>
		</div>
	)
}

export default PersonalAreaHome
