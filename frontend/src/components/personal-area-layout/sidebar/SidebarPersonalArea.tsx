'use client'

import IconUI from '@/components/ui/icon/Icon'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU_LK } from './menu.data'
import styles from './SidebarPersonalArea.module.scss'

const SidebarPersonalArea = () => {
	const router = usePathname()

	return (
		<aside className={styles.sidebar}>
			<div className={styles.logoWrapper}>
				<Link href='/licnyy-kabinet' className={styles.logo}>
					<Image src='/logo.svg' alt='logo' fill />
				</Link>
			</div>
			<nav>
				<ul>
					{MENU_LK.map((item, index) => (
						<li key={index}>
							<Link
								href={item.link}
								className={`${
									router === item.link
										? styles.linkActive + ' ' + styles.link
										: styles.link
								}`}
							>
								<IconUI icon={item.icon} />
								<h3>{item.name}</h3>
								{item.arrow && <IconUI icon='arrowRightTopMini' />}
							</Link>
						</li>
					))}
					<li></li>
				</ul>
			</nav>
		</aside>
	)
}

export default SidebarPersonalArea
