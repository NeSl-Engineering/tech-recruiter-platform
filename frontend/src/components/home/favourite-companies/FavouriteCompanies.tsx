import Image from 'next/image'
import styles from './FavouriteCompanies.module.scss'

const FavouriteCompanies = () => {
	return (
		<div className={styles.companies}>
			<h1>Любимое обучение таких компаний, как:</h1>
			<div className={styles.row}>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
				<div className={styles.image}>
					<Image src='/company.svg' fill alt='company' />
				</div>
			</div>
		</div>
	)
}

export default FavouriteCompanies
