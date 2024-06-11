import Transition from '@/components/ui/transitions/Transition'
import Image from 'next/image'
import styles from './FavouriteCompanies.module.scss'

const FavouriteCompanies = () => {
	return (
		<div className={styles.companies}>
			<Transition>
				<h1>Любимое обучение таких компаний, как:</h1>
				<div className={styles.row + " " + styles.first}>
					<div className={styles.image}>
						<Image src='/favorite-companies/1.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/2.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/3.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/4.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/5.svg' fill alt='company' />
					</div>
				</div>
				<div className={styles.row + " " + styles.second}>
					<div className={styles.image}>
						<Image src='/favorite-companies/6.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/7.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/8.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/9.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/10.svg' fill alt='company' />
					</div>{' '}
					<div className={styles.image}>
						<Image src='/favorite-companies/11.svg' fill alt='company' />
					</div>
				</div>
				<div className={styles.row + " " + styles.last}>
					<div className={styles.image}>
						<Image src='/favorite-companies/12.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/13.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/14.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/15.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/16.svg' fill alt='company' />
					</div>
					<div className={styles.image}>
						<Image src='/favorite-companies/17.svg' fill alt='company' />
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default FavouriteCompanies
