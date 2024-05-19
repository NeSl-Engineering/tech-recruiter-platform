'use client'

import IconUI from '@/components/ui/icon/Icon'
import { LK_PAGES } from '@/config/lk-pages-url.config'
import { useDropdown } from '@/hooks/useDropdown'
import { removeFromStorage } from '@/services/auth-token.service'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './HeaderPersonalArea.module.scss'
const HeaderPersonalArea = () => {
	const router = useRouter()
	const {
		showDropdown,
		closeDropdown,
		openDropdown,
		dropdownMenuRef,
		dropdownBodyRef
	} = useDropdown()

	const logout = () => {
		removeFromStorage()
		router.push('/login')
	}

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
					<div className={styles.icon}>
						<IconUI icon='notification' />
					</div>
					<div ref={dropdownBodyRef} className={styles.dropdownWrapper}>
						<div className={styles.icon}>
							<IconUI
								icon='threeDots'
								onClick={showDropdown ? closeDropdown : openDropdown}
							/>
						</div>
						{showDropdown && (
							<div ref={dropdownMenuRef} className={styles.dropdown}>
								<ul className={styles.list}>
									<Link href={LK_PAGES.PROFILE} className={styles.item}>
										<h2 className={styles.title}>Мой профиль</h2>
										<div className={styles.navigation}>
											<IconUI icon='arrowRight' />
										</div>
									</Link>
									<button onClick={logout} className={styles.item}>
										<h2 className={styles.title}>Выйти</h2>
										<div className={styles.navigation}>
											<IconUI icon='arrowRight' />
										</div>
									</button>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderPersonalArea
