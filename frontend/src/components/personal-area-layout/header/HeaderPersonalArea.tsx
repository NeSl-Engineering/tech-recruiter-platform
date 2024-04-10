import IconUI from '@/components/ui/icon/Icon'
import Image from 'next/image'
import styles from './HeaderPersonalArea.module.scss'
const HeaderPersonalArea = () => {
	return (
		<header className={styles.header}>
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
				</div>
			</div>
		</header>
	)
}

export default HeaderPersonalArea
