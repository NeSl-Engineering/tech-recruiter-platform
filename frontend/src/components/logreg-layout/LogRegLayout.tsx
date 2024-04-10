import Image from 'next/image'
import React from 'react'
import styles from './LogRegLayout.module.scss'

const LogRegLayout = ({
	text,
	children
}: {
	text: string
	children: React.ReactNode
}) => {
	return (
		<div className={styles.LogReg}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Image src='logo.svg' alt='logo' fill />
				</div>
				<div className={styles.titleBlock}>
					<h1>Добро пожаловать!</h1>
					<p>{text}</p>
				</div>
				{children}
			</div>
		</div>
	)
}

export default LogRegLayout
