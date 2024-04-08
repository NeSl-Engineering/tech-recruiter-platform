'use client'

import { Button } from '@/components/ui/buttons/Button'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { Field } from '@/components/ui/fields/Field'
import Transition from '@/components/ui/transitions/Transition'
import { useState } from 'react'
import styles from './Contacts.module.scss'

const Contacts = () => {
	const [isCheckbox, setIsCheckbox] = useState(false)
	return (
		<div className={styles.contacts}>
			<Transition>
				<div className='__container'>
					<div className={styles.row}>
						<div className={styles.left}>
							<h1>
								Оставьте свои контакты и наши специалисты помогут вам выбрать
								курс
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
								<Checkbox
									isTickOpen={isCheckbox}
									text='Я соглашаюсь на обработку персональных данных'
									handleChange={() => setIsCheckbox(value => !value)}
								/>
								<Button>Оставить заявку</Button>
							</form>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	)
}

export default Contacts
