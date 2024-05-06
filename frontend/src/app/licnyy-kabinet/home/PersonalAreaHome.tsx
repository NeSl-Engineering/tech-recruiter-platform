import ProgressBlock from '@/components/personal-area/progress-block/ProgressBlock'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import Image from 'next/image'
import styles from './PersonalAreaHome.module.scss'

const PersonalAreaHome = () => {
	return (
		<div className={styles.PersonalArea}>
			<div className={styles.searchWrapper}>
				<div className={styles.searchItem}>
					<Field id='1' placeholder='Найти курс' />
					<div className={styles.searchButton}>
						<Button cyanButton>Найти</Button>
					</div>
				</div>
			</div>
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
				<div className={styles.qrCode}>
					<Image src='/qr-code.svg' alt='qrCode' fill />
				</div>
			</div>
		</div>
	)
}

export default PersonalAreaHome
