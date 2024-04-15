import IconUI from '@/components/ui/icon/Icon'
import Image from 'next/image'
import styles from './HeaderPersonalArea.module.scss'
const HeaderPersonalArea = () => {
	return (
		<header className={styles.header}>
			<div className={styles.profile}>
				<div className={styles.img}>
					<Image src='/profile.svg' alt='profile' fill />
				</div>
				<div className={styles.content}>
					<h1>Emir Hudayberdiyew</h1>
					<span>Онлайн</span>
				</div>
				<div className={styles.icons}>
					<IconUI icon='notification'/>
					<IconUI icon='threeDots'/>
				</div>
			</div>
		</header>
	)
}

export default HeaderPersonalArea
