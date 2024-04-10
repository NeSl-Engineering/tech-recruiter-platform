import { Button } from '@/components/ui/buttons/Button'
import Link from 'next/link'
import styles from './SubscribeLink.module.scss'
import Transition from '@/components/ui/transitions/Transition'

const SubscribeLink = () => {
	return (
		<div className={styles.SubscribeLink}>
			<Transition>
				<div className={styles.titleBlock}>
					<h1>Подпишитесь на нашу рассылку, чтобы не пропустить новости</h1>
					<p>
						Нажимая на кнопку "Подписаться", вы соглашаетесь с условиями
						<span>
							<Link href='/'> публичной оферты,</Link>
						</span>
						<span>
							<Link href='/'> политикой обработки персональных данных, </Link>
						</span>
						и даете согласие
						<span>
							<Link href='/'> на обработку персональных данных.</Link>
						</span>
					</p>
				</div>
				<div className={styles.searchWrapper}>
					<input
						type='search'
						placeholder='Найди свой курс'
						className={styles.input}
					/>
					<div className={styles.buttonSub}>
						<Button cyanButton>Подписаться</Button>
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default SubscribeLink
