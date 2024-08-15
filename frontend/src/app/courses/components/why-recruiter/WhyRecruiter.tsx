import Image from 'next/image'
import styles from './WhyRecruiter.module.scss'

const WhyRecruiter = () => {
	return (
		<div className={styles.WhyRecruiter}>
			<div className={styles.titleBlock}>
				<h1 className={styles.title}>
					За что выбирают «Академию IT-рекрутинга»
				</h1>
				<p className={styles.description}>
					Всё, что изучишь в теории, отработаешь на практике во время обучения.
					Наша цель — не просто дать знания, но и помочь обрести конкретные
					навыки для работы.
				</p>
			</div>
			<div className={styles.items}>
				<div className={styles.item}>
					<div className={styles.content}>
						<h1>Мы делаем обучение комплексным</h1>
						<p>
							От изучения полного цикла работы рекрутера до основ IT. Поэтому
							наш выпускник сможет закрыть любого IT-специалиста. <br />
							<br /> Даже если после обучения ты не захочешь идти в
							IT-рекрутинг, всегда сможешь строить карьеру рекрутера в любой
							другой сфере или уйти в более глубокое изучение IT — база уже
							будет.
						</p>
					</div>
					<div className={styles.image}>
						<Image src='/why-recruiter.svg' alt='' fill />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<Image src='/why-recruiter2.svg' alt='' fill />
					</div>
					<div className={styles.content}>
						<h1>Даем много практики</h1>
						<p>
							Практические задания курса моделируют весь цикл работы
							IT-рекрутера. Поэтому наши выпускники не только знают, что и как
							нужно делать, но и умеют.
						</p>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.content}>
						<h1>Нашу академию знают на рынке</h1>
						<p>
							«Академию IT-рекрутинга» компании рекомендуют своим сотрудникам.
							<br />
							<br />И считают обучение здесь преимуществом перед другими
							кандидатами.
						</p>
					</div>
					<div className={styles.image}>
						<Image src='/why-recruiter3.svg' alt='' fill />
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<Image src='/why-recruiter4.svg' alt='' fill />
					</div>
					<div className={styles.content}>
						<h1>
							Делаем всё возможное, чтобы вы смогли найти работу после обучения
						</h1>
						<p>
							На защиту проектных работ приходят представители из разных
							компаний. У нас уже были «Газпром», InDrive, Pinterest, Ancor,
							Dentsu, «Амира». Кроме того, вы можете попасть в команду кадрового
							агентства Tech Recruiter.
						</p>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.content}>
						<h1>Создали комьюнити IT-рекрутеров, в котором вам всегда рады</h1>
						<p>
							После обучения будем поддерживать с вами связь внутри сообщества
							выпускников, которое растет с каждым годом — помогать советом по
							работе или по жизни, вместе решать профессиональные вопросы,
							знакомиться с новыми ребятами и развиваться.
						</p>
					</div>
					<div className={styles.image}>
						<Image src='/why-recruiter5.svg' alt='' fill />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyRecruiter
