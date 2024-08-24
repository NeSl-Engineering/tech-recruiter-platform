import styles from './DiplomReview.module.scss'

const DiplomReview = () => {
	return (
		<div className={styles.DiplomReview}>
			<h1>
				Образцы диплома <br /> и резюме
			</h1>
			<div className={styles.image}>
				<img src='/diplom-review.svg' alt='' />
			</div>
		</div>
	)
}

export default DiplomReview
