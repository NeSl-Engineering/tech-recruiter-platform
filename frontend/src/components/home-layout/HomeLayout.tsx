import type { PropsWithChildren } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './HomeLayout.module.scss'

const HomeLayout = ({ children }: PropsWithChildren<unknown>) => (
	<div className={styles.HomeLayout}>
		<Header />
		<main className={styles.main}>{children}</main>
		<Footer />
	</div>
)

export default HomeLayout
