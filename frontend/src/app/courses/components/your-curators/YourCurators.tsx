import Image from 'next/image'
import styles from './YourCurators.module.scss'

const YourCurators = () => {
	return (
		<div className={styles.YourCurators}>
			<h2 className={styles.title}>Ваши наставники и кураторы</h2>
			<div className={styles.items}>
				<div className={styles.item}>
					<div className={styles.image}>
						<Image src='/emilia.svg' alt='' fill />
					</div>
					<div className={styles.content}>
						<h3 className={styles.curator}>Язиля Насибуллина</h3>
						<h4 className={styles.title}>
							Создатель и эксперт курса Основатель КА Tech-Rercuiter
						</h4>
						<p className={styles.description}>
							7 лет в IT-подборе на российском и международном рынке. Гуру
							сорсинга и коммуникаций с заказчиками и кандидатами.
						</p>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<Image src='/emilia.svg' alt='' fill />
					</div>
					<div className={styles.content}>
						<h3 className={styles.curator}>Ксения Малова</h3>
						<h4 className={styles.title}>
							Руководитель Академии и эксперт курса
						</h4>
						<p className={styles.description}>
							5 лет в in-house IT-компаниях. Ваш личный переводчик с языка
							айтишников на русский
						</p>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<Image src='/emilia.svg' alt='' fill />
					</div>
					<div className={styles.content}>
						<h3 className={styles.curator}>Анастасия Бакурова</h3>
						<h4 className={styles.title}>
							Куратор курса и IT-рекрутер в агентстве Tech-Rercuiter
						</h4>
						<p className={styles.description}>
							Более 10 лет в найме и развитии персонала Волшебница самых
							развернутых ответов на домашние задания и вопросы в чате
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default YourCurators
