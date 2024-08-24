import styles from './DiplomResume.module.scss'
import { DiplomResumeData } from './DiplomResumeData'

const DiplomResume = () => {
	return (
		<div className={styles.DiplomResume}>
			<div className={styles.titleBlock}>
				<h1>Диплом и резюме</h1>
				<p>
					После обучения вы можете получить диплом государственного образца о
					профессиональной переподготовке по программе «‎Профессия IT-рекрутер»
				</p>
			</div>
			<div className={styles.items}>
				{DiplomResumeData.map((item, index) => (
					<div className={styles.item}>
						<h2>0{index + 1}</h2>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default DiplomResume
