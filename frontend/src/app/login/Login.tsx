'use client'
import LogRegLayout from '@/components/logreg-layout/LogRegLayout'
import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { Field } from '@/components/ui/fields/Field'
import TransitionHalfSec from '@/components/ui/transitions/TransitionOpacity'
import Link from 'next/link'
import { useState } from 'react'

const Login = () => {
	const [isCheckbox, setIsCheckbox] = useState(false)
	return (
		<LogRegLayout
			text='Войдите в свой личный кабинет и получите доступ к множеству уроков и
		вебинаров.'
		>
			<div className={stylesLayout.box}>
				<TransitionHalfSec>
					<form action=''>
						<Field id='' label='Э-мейл' placeholder='Имя' standardStyle />
						<Field
							id=''
							label='Пароль'
							placeholder='Пароль'
							type='password'
							forgotPassword
							standardStyle
							// state='error'
							// isShake
							appendIcon
						/>
						<Checkbox
							isTickOpen={isCheckbox}
							handleChange={() => setIsCheckbox(value => !value)}
							text='Я соглашаюсь на обработку'
						/>
						<Button className='h-[10px]'>Войти в аккаунт</Button>
						<p className={stylesLayout.pText}>
							Don’t have an Account?{' '}
							<span>
								<Link href='/register'>Sign up here</Link>
							</span>
						</p>
					</form>
				</TransitionHalfSec>
			</div>
		</LogRegLayout>
	)
}

export default Login
