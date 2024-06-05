'use client'

import LogRegLayout from '@/components/logreg-layout/LogRegLayout'
import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { Field } from '@/components/ui/fields/Field'
import TransitionHalfSec from '@/components/ui/transitions/TransitionOpacity'
import { authService } from '@/services/auth.service'
import { IAuthLogin } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
	const [isCheckbox, setIsCheckbox] = useState(false)
	const [isPasswordEye, setIsPasswordEye] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isShake, setIsShake] = useState(false)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors }
	} = useForm<IAuthLogin>({
		mode: 'onChange'
	})

	const { mutate: mutateLogin } = useMutation({
		mutationKey: ['profile'],
		mutationFn: (data: IAuthLogin) => authService.login(data),
		onError() {
			toast.error('Не правильный пароль или э-мейл!')
			setIsError(true)
			setIsShake(true)
			setTimeout(() => {
				setIsShake(false)
			}, 1000)
			setTimeout(() => {
				setIsError(false)
			}, 4000)
		},
		onSuccess() {
			toast.success('Успешно зашли!')
			router.push('/licnyy-kabinet/home')
			reset()
		}
	})

	const handlePasswordClick = () => {
		setIsPasswordEye(!isPasswordEye)
	}

	const onSubmit: SubmitHandler<IAuthLogin> = data => {
		mutateLogin(data)
	}

	return (
		<LogRegLayout
			text='Войдите в свой личный кабинет и получите доступ к множеству уроков и
		вебинаров.'
		>
			<Toaster position='top-right' />
			<div className={stylesLayout.box}>
				<TransitionHalfSec>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Field
							id=''
							label='Э-мейл'
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
							isShake={isShake}
							state={errors.email || (isError && 'error')}
						/>
						{errors.email && errors.email.type && <>{errors.email.root}</>}
						<Field
							id=''
							label='Пароль'
							placeholder='Пароль'
							forgotPassword
							standardStyle
							type={isPasswordEye === false ? 'password' : 'text'}
							isPasswordIcon
							passwordEye={isPasswordEye}
							handlePasswordClick={handlePasswordClick}
							{...register('password', {
								required: 'Укажите пароль!',
								minLength: {
									value: 8,
									message: 'Пароль должен содержать минимум 8 символов!'
								}
							})}
							errorsMessage={errors.password && errors.password?.message}
							isShake={isShake}
							state={errors.password || (isError === true && 'error')}
						/>
						{errors.password && <>{errors.password.root}</>}
						<Checkbox
							isTickOpen={isCheckbox}
							handleChange={() => setIsCheckbox(value => !value)}
							text='Я соглашаюсь на обработку'
						/>
						<Button className='h-[10px]' disabled={!isCheckbox}>
							Войти в аккаунт
						</Button>
						<p className={stylesLayout.pText}>
							У вас нет аккаунта?
							<span>
								<Link href='/register'> Зарегистрироваться</Link>
							</span>
						</p>
					</form>
				</TransitionHalfSec>
			</div>
		</LogRegLayout>
	)
}

export default Login
