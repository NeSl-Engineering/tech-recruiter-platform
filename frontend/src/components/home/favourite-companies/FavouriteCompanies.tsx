import Transition from '@/components/ui/transitions/Transition'
import Image from 'next/image'
import styles from './FavouriteCompanies.module.scss'

const FavouriteCompanies = () => {
	return (
		<div className={styles.companies}>
			<Transition>
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
			</Transition>
		</div>
	)
}

export default FavouriteCompanies
