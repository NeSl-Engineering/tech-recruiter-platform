import { CORPORATIVE } from './CorparativeLearning.data'
import styles from './CorporativeLearning.module.scss'

const CorporativeLearning = () => {
	return (
		<div className={styles.CorporativeLearning}>
			<div className='__container'>
				<h1>Корпоративное обучение и тренинги</h1>
				<div className={styles.row}>
					{CORPORATIVE.map((item, index) => (
						<div key={index} className={styles.item}>
							<div className={styles.img}>{item.img}</div>
							<h2>{item.title}</h2>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CorporativeLearning
