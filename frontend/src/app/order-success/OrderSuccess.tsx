'use client'
import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import styles from './OrderSuccess.module.scss'

const OrderSuccess = () => {
	return (
		<div className={styles.order}>
			<div className={styles.logoWrapper}>
				<div className={styles.logo}>
					<Image src='/logo.svg' alt='success' fill sizes='auto' />
				</div>
			</div>
			<div className={styles.box}>
				<div className={styles.icon}>
					<Image src='/success-icon.svg' alt='success' fill sizes='auto' />
				</div>
				<h1 className={styles.title}>Оплата успешна принята!</h1>
				<p className={styles.description}>
					Ваша оплата принята! Через несколько секунд вас перенаправит на
					главную страницу
				</p>
				<div className={styles.button}>
					<Button widthFull>На главную</Button>
				</div>
			</div>
		</div>
	)
}

export default OrderSuccess
