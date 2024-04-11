import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import ProgressBlock from './(progress-block)/ProgressBlock'
import styles from './PersonalArea.module.scss'

const PersonalArea = () => {
	return (
		<div className={styles.PersonalArea}>
			<div className={styles.ourCourses}>
				<h1 className={styles.title}>Мои курсы</h1>
				<div className={styles.row}>
					<ProgressBlock title='Продвинутый сорсинг' />
					<ProgressBlock title='Продвинутый сорсинг' />
				</div>
			</div>
			<div className={styles.demoAccess}>
				<h1 className={styles.title}>Демо доступы</h1>
				<div className={styles.row}>
					<ProgressBlock title='Продвинутый сорсинг' />
					<ProgressBlock title='PRO Коммуникации 2.0' />
					<ProgressBlock title='Продвинутый сорсинг' />
					<ProgressBlock title='PRO Коммуникации 2.0' />
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
				<div className={styles.img}>
					<Image src='/qr-code.svg' alt='qrCode' fill />
				</div>
			</div>
		</div>
	)
}

export default PersonalArea
