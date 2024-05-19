'use client'

import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './ProfileBlock.module.scss'

const ProfileBlock = () => {
	const router = useRouter()
	return (
		<div className={styles.profileBlock}>
			<div className={styles.header}>
				<div className={styles.image}>
					<Image src='/profile.svg' fill alt='Avatar' />
				</div>
				<div className={styles.content}>
					<h2 className={styles.username}>Emir Hudayberdiyew</h2>
					<h2 className={styles.status}>
						Онлайн <span />
					</h2>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.watchedTime}>
					<h3 className={styles.time}>10h 43m</h3>
					<h4 className={styles.text}>Просмотренное время</h4>
				</div>
				<div className={styles.openedModules}>
					<h3 className={styles.countModules}>15</h3>
					<h4 className={styles.text}>Открытых модулей</h4>
				</div>
			</div>
			<Button
				widthFull
				onClick={() => router.push('/licnyy-kabinet/progress/courses')}
			>
				Мои курсы
			</Button>
		</div>
	)
}

export default ProfileBlock
