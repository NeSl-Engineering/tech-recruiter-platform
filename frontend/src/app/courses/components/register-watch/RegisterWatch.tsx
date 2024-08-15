'use client'

import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './RegisterWatch.module.scss'

const RegisterWatch = () => {
	const router = useRouter()
	return (
		<div className={styles.RegisterWatch}>
			<div className='__container'>
				<div className={styles.row}>
					<div className={styles.left}>
						<h1>Регистрируйтесь и смотрите 3 вводных урока:</h1>
						<p>Оцените качество записи и контента на бесплатном мини-курсе</p>
						<div className={styles.buttons}>
							<Button
								redButton
								py='16px'
								onClick={() => router.push('/register')}
							>
								Зарегистрироваться
							</Button>
							<Button
								redTransparent
								py='16px'
								onClick={() => router.push('/login')}
							>
								Войти в аккаунт
							</Button>
						</div>
					</div>
					<div className={styles.image}>
						<Image src='/register-watch.svg' alt='' fill />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterWatch
