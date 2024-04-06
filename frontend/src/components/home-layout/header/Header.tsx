'use client'

import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './Header.module.scss'
import MenuItem from './MenuItem'

const Header = () => {
	const router = useRouter()
	return (
		<header className={styles.header}>
			<div className='__container'>
				<nav className={styles.row}>
					<div className={styles.logo}>
						<Image src='/logo.svg' alt='logo' priority fill />
					</div>
					<MenuItem />
					<Button cyanButton onClick={() => router.push('/login')}>
						Войти
					</Button>
				</nav>
			</div>
		</header>
	)
}

export default Header
