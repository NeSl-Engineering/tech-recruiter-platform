'use client'
import LogRegLayout from '@/components/logreg-layout/LogRegLayout'
import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import styles from './Register.module.scss'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import TransitionX from '@/components/ui/transitions/TransitionX'
import { authService } from '@/services/auth.service'
import { IAuthRegister } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import FourthFormRegister from './forms/FourthFormRegister'
import SuccessFormRegister from './forms/SuccessRegister'
import { INDICATORS } from './register.data'

const Register = () => {
	const router = useRouter()
	const [isActive, setIsActive] = useState('1')
	const { register, handleSubmit, reset } = useForm<IAuthRegister>({
		mode: 'onChange'
	})

	const { mutate: mutateRegister } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IAuthRegister) => authService.register(data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			setIsActive('5')
		}
	})

	const handleClick = (e: SyntheticEvent) => {
		e.preventDefault()
		setIsActive('2')
	}

	const onSubmit: SubmitHandler<IAuthRegister> = data => {
		mutateRegister(data)
	}

	return (
		<LogRegLayout text='Зарегистрируйте аккаунт в нашей платформы и становитесь лучше с каждым днем!'>
			<div className={styles.indicators}>
				{INDICATORS.map((indicator, index: any) => (
					<div
						key={index}
						className={`${styles.indicator} ${
							isActive
								? isActive === indicator.index
									? styles.active
									: isActive === '2'
									? styles.firstCompleted
									: isActive === '3'
									? styles.secondCompleted
									: isActive === '4'
									? styles.thirdCompleted
									: styles.red
								: ''
						}`}
					>
						{indicator.index}
					</div>
				))}
			</div>
			<div className={stylesLayout.box}>
				<TransitionX>
					<form onSubmit={handleSubmit(onSubmit)}>
						{isActive === '1' ? (
							<>
								<Field
									id='first_name'
									label='Имя'
									placeholder='Имя...'
									standardStyle
									{...register('first_name')}
								/>
								<Field
									id='last_name'
									label='фамилия'
									placeholder='фамилия...'
									standardStyle
									{...register('last_name')}
								/>
								<Field
									id='email'
									label='Email Address'
									placeholder='Email Address'
									standardStyle
									{...register('email')}
								/>
								<Button onClick={e => handleClick(e)}>Продолжить</Button>
							</>
						) : isActive === '2' ? (
							<>
								<div className={stylesLayout.row3}>
									<Field
										id='day'
										label='День'
										placeholder='ДД'
										standardStyle
										maxLength={2}
										{...register('birthDate')}
									/>
									<Field
										id='month'
										label='Месяц'
										placeholder='ММ'
										standardStyle
										maxLength={2}
										{...register('birthDate')}
									/>
									<Field
										id='year'
										label='Год'
										placeholder='ГГ'
										standardStyle
										maxLength={4}
										{...register('birthDate')}
									/>
								</div>
								<Field
									id='username'
									label='Имя пользователья'
									placeholder='John'
									standardStyle
									{...register('username')}
								/>
								<Field
									id='telegram'
									label='Ваш телеграм'
									placeholder='@tekeogly'
									standardStyle
									{...register('telegram_nickname')}
									// state='error'
									// isShake
								/>
								<Button onClick={() => setIsActive('3')}>Продолжить</Button>
							</>
						) : isActive === '3' ? (
							<>
								<Field
									id='password'
									label='Пароль'
									placeholder='Пароль'
									standardStyle
									type='password'
									appendIcon
									{...register('password')}
								/>
								<Field
									id='password'
									label='Повторите пароль'
									placeholder='Повторите пароль'
									standardStyle
									type='password'
									appendIcon
									{...register('password')}
									// state='error'
									// isShake
								/>
								<Button onClick={() => setIsActive('4')}>Продолжить</Button>
							</>
						) : isActive === '4' ? (
							<FourthFormRegister pushNextIndex={() => setIsActive('5')} />
						) : (
							<SuccessFormRegister
								pushNextIndex={() => router.push('/licnyy-kabinet')}
							/>
						)}
					</form>
				</TransitionX>
			</div>
		</LogRegLayout>
	)
}

export default Register
