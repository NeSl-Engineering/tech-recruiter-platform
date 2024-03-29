'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import IconUI from '@/components/ui/icon/Icon'
import { useState } from 'react'
import styles from './Contacts.module.scss'

const Contacts = () => {
	const [isTickOpen, setIsTickOpen] = useState(false)

	return (
		<div className={styles.contacts}>
			<div className='__container'>
				<div className={styles.row}>
					<div className={styles.left}>
						<h1>
							Оставьте свои контакты и наши специалисты помогут вам выбрать курс
						</h1>
						<p>
							Не знаете с чего начать свой путь? Оставьте свои данные и мы
							поможем вам определиться с выбором лучшей профессии для вас.
						</p>
					</div>
					<div className={styles.right}>
						<form action='#'>
							<Field id='1' placeholder='Имя' />
							<Field id='1' placeholder='Почта' />
							<Field id='1' placeholder='Номер телефона' />
							<div
								className={`${styles.tickWrapper} ${
									isTickOpen && styles.active
								}`}
							>
								<div onClick={() => setIsTickOpen(current => !current)}>
									<div className={styles.notActiveTick}>
										<IconUI icon='tickNotAccept' />
									</div>
									<div className={styles.activeTick}>
										<IconUI icon='tickAccept' />
									</div>
								</div>
								<h3>Я соглашаюсь на обработку персональных данных</h3>
							</div>
							<Button>Оставить заявку</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
