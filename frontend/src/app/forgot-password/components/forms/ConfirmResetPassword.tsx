'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import TransitionHalfSec from '@/components/ui/transitions/TransitionOpacity'
import { forgotPasswordService } from '@/services/forgot-password.service'
import { IConfirmPassword } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

const ConfirmResetPassword = ({ itemProp }: { itemProp?: string }) => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		watch,
		setValue,
		formState: { errors }
	} = useForm<IConfirmPassword>({
		mode: 'onChange'
	})

	const { mutate: mutateConfirmPassword } = useMutation({
		mutationKey: ['confirm-reset-password'],
		mutationFn: (data: IConfirmPassword) =>
			forgotPasswordService.postConfirmPassword(data),
		onSuccess() {
			toast.success('Пароль успешно обновлен!')
			router.push('/licnyy-kabinet/home')
			reset()
		}
	})

	useEffect(() => {
		console.log(itemProp)
		if (itemProp) {
			console.log(itemProp)

			setValue('token', itemProp)
		}
	}, [])

	const password = watch('password')

	const [passwordEye, setPasswordEye] = useState(false)
	const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)

	const handlePasswordClick = () => {
		setPasswordEye(!passwordEye)
	}

	const handleConfirmPasswordClick = () => {
		setConfirmPasswordEye(!confirmPasswordEye)
	}

	const onSubmit: SubmitHandler<IConfirmPassword> = data => {
		const { confirmPassword, ...rest } = data
		const dto = { ...rest }
		mutateConfirmPassword(dto)
	}
	return (
		<TransitionHalfSec>
			<Toaster position='top-right' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<>
					<Field
						id='password'
						label='Новый пароль'
						placeholder='введите новый пароль...'
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
						errorsMessage={errors.password && errors.password?.message}
						state={errors.password && 'error'}
					/>
					{errors.password && <>{errors.password.root}</>}
					<Field
						id='confirmPassword'
						label='Повторите новый пароль'
						placeholder='повторите новый пароль...'
						standardStyle
						isPasswordIcon
						type={confirmPasswordEye === false ? 'password' : 'text'}
						passwordEye={confirmPasswordEye}
						handlePasswordClick={handleConfirmPasswordClick}
						{...register('confirmPassword', {
							required: 'Укажите пароль подтверждения!',
							validate: value => value === password || 'Пароли не совпадают!'
						})}
						errorsMessage={
							errors.confirmPassword && errors.confirmPassword?.message
						}
						state={errors.confirmPassword && 'error'}
					/>
					{errors.confirmPassword && <>{errors.confirmPassword.root}</>}
					<Button onClick={handleSubmit(onSubmit)}>Сбросить пароль</Button>
				</>
			</form>
		</TransitionHalfSec>
	)
}

export default ConfirmResetPassword
