import { Button } from '@/components/ui/buttons/Button'
import Transition from '@/components/ui/Transition'
import { COMMUNITY_TELEGRAM } from './CommunityTelegram.data'
import styles from './CommunityTelegram.module.scss'

const CommunityTelegram = () => {
	return (
		<div className={styles.CommunityTelegram}>
			<Transition>
				<div className='__container'>
					<div className={styles.titleBlock}>
						<h1>Сообщество IT рекрутеров в Telegram</h1>
						<p>
							Сообщество IT HR, IT-рекрутеров, руководителей подбора персонала,
							основателей бизнеса на стыке IT и HR
						</p>
					</div>
					<div className={styles.row}>
						{COMMUNITY_TELEGRAM.map((item, index) => (
							<div key={index} className={styles.item}>
								<h2>{item.title}</h2>
								<ul>
									{item.list.map((child, index) => (
										<li key={index}>
											<span>✅</span>
											<span>{child.title}</span>
										</li>
									))}
								</ul>
								{item.isButton && (
									<div className={styles.button}>
										<Button widthFull>Присоединиться к сообществу</Button>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default CommunityTelegram
