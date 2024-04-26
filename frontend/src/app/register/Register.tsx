'use client'
import LogRegLayout from '@/components/logreg-layout/LogRegLayout'
import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
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
	const {
		register,
		handleSubmit,
		reset,
		watch,
		setValue,
		formState: { errors }
	} = useForm<IAuthRegister>({
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

	const value1 = watch('day')
	const value2 = watch('month')
	const value3 = watch('year')

	const combineValues = (): string => {
		// Combine values using your desired logic (e.g., concatenation)
		const combined = `${value1} ${value2} ${value3}`
		return combined
	}

	useEffect(() => {
		setValue('birthDate', combineValues())
	}, [value1, value2, value3, setValue, combineValues])

	const password = watch('password')

	const [passwordEye, setPasswordEye] = useState(false)
	const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)

	const handlePasswordClick = () => {
		setPasswordEye(!passwordEye)
	}

	const handleConfirmPasswordClick = () => {
		setConfirmPasswordEye(!confirmPasswordEye)
	}

	const onSubmit: SubmitHandler<IAuthRegister> = data => {
		const { day, month, year, confirmPassword, ...rest } = data
		const dto = { ...(rest || undefined) }
		mutateRegister(dto)
		setIsActive('4')
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
					<form>
						{isActive === '1' ? (
							<>
								<Field
									id='first_name'
									label='Имя'
									placeholder='Имя...'
									standardStyle
									{...register('first_name', {
										required: 'Укажите имя!'
									})}
									errorsMessage={
										errors.first_name && errors.first_name?.message
									}
									state={errors.first_name && 'error'}
								/>
								{errors.first_name && <>{errors.first_name.root}</>}
								<Field
									id='last_name'
									label='Фамилия'
									placeholder='фамилия...'
									standardStyle
									{...register('last_name', {
										required: 'Укажите фамилию!'
									})}
									errorsMessage={errors.last_name && errors.last_name?.message}
									state={errors.last_name && 'error'}
								/>
								{errors.last_name && <>{errors.last_name.root}</>}
								<Field
									id='email'
									label='Почта'
									placeholder='example@gmail.com'
									standardStyle
									{...register('email', {
										required: 'Укажите почту!'
									})}
									errorsMessage={errors.email && errors.email?.message}
									state={errors.email && 'error'}
								/>
								{errors.email && <>{errors.email.root}</>}
								<Button onClick={handleSubmit(() => setIsActive('2'))}>
									Продолжить
								</Button>
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
										{...register('day', {
											required: 'Укажите день'
										})}
										errorsMessage={errors.day && errors.day?.message}
										state={errors.day && 'error'}
									/>
									{errors.day && <>{errors.day.root}</>}
									<Field
										id='month'
										label='Месяц'
										placeholder='ММ'
										standardStyle
										maxLength={2}
										{...register('month', {
											required: 'Укажите месяц'
										})}
										errorsMessage={errors.month && errors.month?.message}
										state={errors.month && 'error'}
									/>
									{errors.month && <>{errors.month.root}</>}
									<Field
										id='year'
										label='Год'
										placeholder='ГГ'
										standardStyle
										maxLength={4}
										{...register('year', {
											required: 'Укажите год'
										})}
										errorsMessage={errors.year && errors.year?.message}
										state={errors.year && 'error'}
									/>
									{errors.year && <>{errors.year.root}</>}
								</div>
								<Field
									id='username'
									label='Имя пользователья'
									placeholder='John'
									standardStyle
									{...register('username', {
										required: 'Укажите имя пользователья'
									})}
									errorsMessage={errors.username && errors.username?.message}
									state={errors.username && 'error'}
								/>
								{errors.username && <>{errors.username.root}</>}
								<Field
									id='telegram'
									label='Ваш телеграм'
									placeholder='@tekeogly'
									standardStyle
									{...register('telegram_nickname')}
								/>
								<Button onClick={handleSubmit(() => setIsActive('3'))}>
									Продолжить
								</Button>
							</>
						) : (
							isActive === '3' && (
								<>
									<Field
										id='password'
										label='Пароль'
										placeholder='Пароль'
										standardStyle
										isPasswordIcon
										type={passwordEye === false ? 'password' : 'text'}
										passwordEye={passwordEye}
										handlePasswordClick={handlePasswordClick}
										{...register('password', {
											required: 'Укажите пароль!'
										})}
										errorsMessage={errors.password && errors.password?.message}
										state={errors.password && 'error'}
									/>
									{errors.password && <>{errors.password.root}</>}
									<Field
										id='confirmPassword'
										label='Повторите пароль'
										placeholder='Повторите пароль'
										standardStyle
										isPasswordIcon
										type={confirmPasswordEye === false ? 'password' : 'text'}
										passwordEye={confirmPasswordEye}
										handlePasswordClick={handleConfirmPasswordClick}
										{...register('confirmPassword', {
											required: 'Укажите пароль подтверждения!',
											validate: value =>
												value === password || 'Пароли не совпадают!'
										})}
										errorsMessage={
											errors.confirmPassword && errors.confirmPassword?.message
										}
										state={errors.confirmPassword && 'error'}
									/>
									{errors.confirmPassword && <>{errors.confirmPassword.root}</>}
									<Button onClick={handleSubmit(onSubmit)}>Продолжить</Button>
								</>
							)
						)}
					</form>
					{isActive === '4' ? (
						<FourthFormRegister pushNextIndex={() => setIsActive('5')} />
					) : (
						isActive === '5' && (
							<SuccessFormRegister
								pushNextIndex={() => router.push('/licnyy-kabinet')}
							/>
						)
					)}
				</TransitionX>
			</div>
		</LogRegLayout>
	)
}

export default Register
