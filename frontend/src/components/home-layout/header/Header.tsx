'use client'
import Cookies from 'js-cookie'

import { useProfile } from '@/app/licnyy-kabinet/change-password/hooks/useProfile'
import { Button } from '@/components/ui/buttons/Button'
import { EnumTokens } from '@/services/auth-token.service'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import MenuItem from './MenuItem'

const Header = () => {
	const router = useRouter()
	const [hasMounted, setHasMounted] = useState(false)
	const accessToken = hasMounted ? Cookies.get(EnumTokens.ACCESS_TOKEN) : null
	useEffect(() => {
		setHasMounted(true)
	}, [])
	const { data, isLoading, refetch } = useProfile()

	return (
		<header className={styles.header}>
			<div className='__container'>
				<nav className={styles.row}>
					<Link href='/' className={styles.logo}>
						<Image src='/logo.svg' alt='logo' priority fill />
					</Link>
					<MenuItem />
					{accessToken ? (
						<button
							className={styles.avatar}
							onClick={() => router.push('/licnyy-kabinet/home')}
						>
							<h2>
								{data?.first_name?.charAt(0)}

								{data?.last_name?.charAt(0)}
							</h2>
						</button>
					) : (
						<Button cyanButton onClick={() => router.push('/login')}>
							Войти
						</Button>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Header
