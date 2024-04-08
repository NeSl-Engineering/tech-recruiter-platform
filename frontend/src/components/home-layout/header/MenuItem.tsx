'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU } from '../menu.data'
import styles from './Header.module.scss'

const MenuItem = () => {
	const router = usePathname()
	return (
		<ul className={styles.MenuItem}>
			{MENU.map((item, index) => (
				<li key={index}>
					<Link
						href={item.link}
						className={`${
							router === item.link
								? styles.linkActive + ' ' + styles.link
								: styles.link
						}`}
					>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default MenuItem
