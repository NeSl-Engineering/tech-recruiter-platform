'use client'

import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './RecruiterYours.module.scss'

const RecruiterYours = () => {
	const router = useRouter()
	return (
		<div className={styles.RecruiterYours}>
			<div className='__container'>
				<div className={styles.row}>
					<div className={styles.left}>
						<h1>Пока не уверен, что IT-рекрутинг это твое?</h1>
						<p>
							Приходи на экспресс-консультацию, чтобы понять подходит ли тебе
							IT-рекуртинг и как в нем быстро прокачать себя.
						</p>
						<h3>Это бесплатно и займет всего 15-20 минут</h3>
						<div className={styles.buttons}>
							<Button
								redButton
								py='16px'
								onClick={() => router.push('/register')}
							>
								Записаться
							</Button>
						</div>
					</div>
					<div className={styles.image}>
						<Image src='/recruiter-yours.svg' alt='' fill />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecruiterYours
