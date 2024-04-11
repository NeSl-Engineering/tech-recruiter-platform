<<<<<<< HEAD
import IconUI from '@/components/ui/icon/Icon'
=======
>>>>>>> 5145f9b1365b0f25121ac57e34d9970a5fe572c1
import Image from 'next/image'
import styles from './HeaderPersonalArea.module.scss'
import IconUI from '@/components/ui/icon/Icon'
const HeaderPersonalArea = () => {
	return (
		<header className={styles.header}>
<<<<<<< HEAD
			<div className={styles.row}>
				<div className={styles.profile}>
					<div className={styles.img}>
						<Image src='/profile.svg' alt='person' fill />
					</div>
					<div className={styles.content}>
						<h2>Emir Hudayberdiyew</h2>
						<p>Онлайн</p>
					</div>
					<div className={styles.buttons}>
						<IconUI icon='notification' />
						<IconUI icon='threeDots' />
					</div>
=======
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
>>>>>>> 5145f9b1365b0f25121ac57e34d9970a5fe572c1
				</div>
			</div>
		</header>
	)
}

export default HeaderPersonalArea
