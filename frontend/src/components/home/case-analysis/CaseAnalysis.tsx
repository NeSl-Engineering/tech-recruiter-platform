import { Button } from '@/components/ui/buttons/Button'
import Transition from '@/components/ui/Transition'
import styles from './CaseAnalysis.module.scss'

const CaseAnalysis = () => {
	return (
		<div className={styles.CaseAnalysis}>
			<Transition>
				<div className='__container'>
					<div className={styles.row}>
						<div className={styles.left}>
							<div className={styles.titleBlock}>
								<h4>Запись вебинара</h4>
								<h1>Разбор кейсов IT-рекрутеров: пошаговый план действий</h1>
							</div>
							<div className={styles.bottom}>
								<h2>На вебинаре разобрали:</h2>
								<ul>
									<li>
										— Основные типы IT-рекрутеров их страхи и основные ошибки в
										профессии
									</li>
									<li>— Реальные кейсы практикующих и начинающих рекрутеров</li>
									<li>— Пошаговый план развития по запросам слушателей</li>
									<li>— Ответы на вопросы после вебинара</li>
								</ul>
								<p>После покупки пришлем запись вебинара в телеграм</p>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.toBuy}>
								<h2>990 ₽</h2>
								<Button>Купить в записи</Button>
								<Button blueTransparent>Оплата зарубежной картой</Button>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default CaseAnalysis
