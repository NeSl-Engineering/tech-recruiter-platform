'use client'
import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import styles from './OrderFail.module.scss'

const OrderFail = () => {
	return (
		<div className={styles.order}>
			<div className={styles.logoWrapper}>
				<div className={styles.logo}>
					<Image src='/logo.svg' alt='logo' fill sizes='auto' />
				</div>
			</div>
			<div className={styles.box}>
				<div className={styles.icon}>
					<Image src='/error-icon.svg' alt='error' fill sizes='auto' />
				</div>
				<h1 className={styles.title}>Возникли проблемы при оплате</h1>
				<p className={styles.description}>
					Возникли проблемы при оплате. Попробуйте немного позже.
				</p>
				<div className={styles.button}>
					<Button widthFull>На главную</Button>
				</div>
			</div>
		</div>
	)
}

export default OrderFail
