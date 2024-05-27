import Transition from '@/components/ui/transitions/Transition'
import { OurCompanyData } from './OurCompany.data'
import styles from './OurCompany.module.scss'

const OurCompany = () => {
	return (
		<div className={styles.OurCompany}>
			<div className='__container'>
				<Transition>
					<h1>Наша компания – это</h1>
					<div className={styles.row}>
						{OurCompanyData.map((item, index) => (
							<div key={index} className={styles.item}>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						))}
					</div>
				</Transition>
			</div>
		</div>
	)
}

export default OurCompany
