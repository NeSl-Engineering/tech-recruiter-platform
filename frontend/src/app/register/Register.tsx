'use client'

import LogRegLayout from '@/components/logreg-layout/LogRegLayout'
import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import TransitionX from '@/components/ui/transitions/TransitionX'
import { authService } from '@/services/auth.service'
import { IAuthRegister } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import OtpFormRegister from './forms/OtpFormRegister'
import SuccessFormRegister from './forms/SuccessRegister'
import { INDICATORS } from './register.data'
import styles from './Register.module.scss'

const Register = () => {
	const router = useRouter()
	const [isActive, setIsActive] = useState('1')

	const {
		register,
		handleSubmit,
		reset,
		watch,
		setValue,
		getValues,
		formState: { errors }
	} = useForm<IAuthRegister>({
		mode: 'onChange'
	})

	const { mutate: mutateRegister } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IAuthRegister) => authService.register(data),
		onSuccess() {
			toast.success('Код подтверждения отправилось на вашу почту!')
			reset()
		}
	})

	const value1 = watch('day')
	const value2 = watch('month')
	const value3 = watch('year')

	const combineValues = (): string => {
		const combined = `${value3}-${value2}-${value1}`
		return combined
	}

	useEffect(() => {
		setValue('birth_date', combineValues())
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
		const dto = { ...rest }
		mutateRegister(dto)
		setIsActive('4')
	}

	return (
		<LogRegLayout text='Зарегистрируйте аккаунт в нашей платформы и становитесь лучше с каждым днем!'>
			<Toaster position='top-right' />

			<div className={styles.indicators}>
				{INDICATORS.map((indicator, index: any) => (
					// 	indicator.index
					// 	? indicator.index === '1'
					// 	? () => setIsActive('2')
					// 	: indicator.index === '2'
					// 	? () => setIsActive('3')
					// 	: indicator.index === '3'
					// 	? () => setIsActive('4')
					// 	: e => e.preventDefault()
					// 	: e => e.preventDefault()
					<div
						key={index}
						onClick={
							indicator.index === '4'
								? () => setIsActive('4')
								: e => e.preventDefault()
						}
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
					{isActive === '4' || isActive === '5' ? (
						<>
							{isActive === '4' ? (
								<OtpFormRegister
									pushNextIndex={() => setIsActive('5')}
									itemProp={getValues('email')}
								/>
							) : (
								isActive === '5' && (
									<SuccessFormRegister
										pushNextIndex={() => router.push('/login')}
									/>
								)
							)}
						</>
					) : (
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
										errorsMessage={
											errors.last_name && errors.last_name?.message
										}
										state={errors.last_name && 'error'}
									/>
									{errors.last_name && <>{errors.last_name.root}</>}
									<Field
										type='email'
										id='email'
										label='Почта'
										placeholder='example@gmail.com'
										standardStyle
										{...register('email', {
											required: 'Укажите почту!',
											pattern: {
												value: /\S+@\S+\.\S+/,
												message: 'Укажите правильный формат почты!'
											}
										})}
										errorsMessage={errors.email && errors.email?.message}
										state={errors.email && 'error'}
									/>
									{errors.email && errors.email.type && (
										<>{errors.email.root}</>
									)}
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
											isNumber
											{...register('day', {
												required: 'Укажите день',
												pattern: {
													value: /^(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[0-9])$/,
													message: '1-31'
												}
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
											isNumber
											{...register('month', {
												required: 'Укажите месяц',
												pattern: {
													value: /^([1-9]|1[0-2])$/,
													message: '1-12'
												}
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
											isNumber
											// numberThousand
											{...register('year', {
												required: 'Укажите год',
												pattern: {
													value: /^(19[7-9]\d|20[0-4]\d)$/,
													message: '1970-2050'
												}
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
											type={passwordEye === false ? 'password' : 'text'}
											isPasswordIcon
											passwordEye={passwordEye}
											handlePasswordClick={handlePasswordClick}
											{...register('password', {
												required: 'Укажите пароль!',
												minLength: {
													value: 8,
													message: 'Пароль должен содержать минимум 8 символов!'
												}
											})}
											errorsMessage={
												errors.password && errors.password?.message
											}
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
												errors.confirmPassword &&
												errors.confirmPassword?.message
											}
											state={errors.confirmPassword && 'error'}
										/>
										{errors.confirmPassword && (
											<>{errors.confirmPassword.root}</>
										)}
										<Button onClick={handleSubmit(onSubmit)}>Продолжить</Button>
									</>
								)
							)}
						</form>
					)}
				</TransitionX>
			</div>
		</LogRegLayout>
	)
}

export default Register
