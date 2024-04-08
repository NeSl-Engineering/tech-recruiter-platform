import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import styles from './Header.module.scss'
import MenuItem from './MenuItem'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='__container'>
				<nav className={styles.row}>
					<div className={styles.logo}>
						<Image src='/logo.svg' alt='logo' priority fill />
					</div>
					<MenuItem />
					<Button cyanButton>Войти</Button>
				</nav>
			</div>
		</header>
	)
}

export default Header
