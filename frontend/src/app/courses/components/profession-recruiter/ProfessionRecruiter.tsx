'use client'

import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import { useCourses } from '../../hooks/useCourses'
import styles from './ProfessionRecruiter.module.scss'

const ProfessionRecruiter = () => {
	const { data } = useCourses()
	return (
		<div className={styles.ProfessionRecruiter}>
			<div>
				<div className={styles.content}>
					<h1 className={styles.title}>{data && data[0].title}</h1>
					<p className={styles.description}>{data && data[0].description}</p>
				</div>
				<div className={styles.duration}>
					<div className={styles.durationLeftBlock}>
						<h2 className={styles.durationTitle}>Когда</h2>
						<h2 className={styles.durationTIme}>2 сентября</h2>
					</div>
					<div className={styles.durationRightBlock}>
						<h2 className={styles.durationTitle}>Продолжительность</h2>
						<h2 className={styles.durationTIme}>9 недель</h2>
					</div>
				</div>
				<div className={styles.buttons}>
					<Button redButton py='16px'>
						Предзапись
					</Button>
					<Button redTransparent py='16px'>
						Получить консультацию
					</Button>
				</div>
			</div>
			<div className={styles.image}>
				<Image src='/emilia.svg' alt='photo' fill />
			</div>
		</div>
	)
}

export default ProfessionRecruiter
