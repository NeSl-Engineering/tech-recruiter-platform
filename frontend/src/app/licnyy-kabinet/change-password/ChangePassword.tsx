'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { profileService } from '@/services/profile.service'
import { IChangePassword } from '@/types/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import styles from './ChangePassword.module.scss'

const ChangePassword = () => {
	const queryClient = useQueryClient()
	const [isError, setIsError] = useState(false)
	const router = useRouter()

	const {
		register,
		handleSubmit,
		reset,
		getValues,
		watch,
		formState: { errors }
	} = useForm<IChangePassword>({
		mode: 'onChange'
	})

	const { mutate: putProfile, isSuccess } = useMutation({
		mutationKey: ['profile'],
		mutationFn: (data: IChangePassword) => profileService.putProfile(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.success('Успешно изменено!')
			reset()
			setTimeout(() => {
				router.back()
			}, 1000)
		},
		onError() {
			toast.error('Ошибка!')
		}
	})

	const password = watch('new_password')

	const [passwordEye, setPasswordEye] = useState(false)
	const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)

	const handlePasswordClick = () => {
		setPasswordEye(!passwordEye)
	}

	const handleConfirmPasswordClick = () => {
		setConfirmPasswordEye(!confirmPasswordEye)
	}

	const onSubmit: SubmitHandler<IChangePassword> = data => {
		const { confirmPassword, ...rest } = data
		const dto = { ...rest }
		putProfile(dto)
	}

	return (
		<div className={styles.changePassword}>
			<Toaster position='top-right' />
			<h1 className={styles.title}>Изменить пароль</h1>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					id='first_name'
					label='Старый пароль'
					placeholder='Николай'
					standardStyle
					{...register('old_password', {
						required: 'Укажите cтарый пароль!'
					})}
					errorsMessage={errors.old_password && errors.old_password?.message}
					state={errors.old_password || (isError && 'error')}
				/>
				<Field
					id='new_password'
					label='Пароль'
					placeholder='Пароль'
					standardStyle
					type={passwordEye === false ? 'password' : 'text'}
					isPasswordIcon
					passwordEye={passwordEye}
					handlePasswordClick={handlePasswordClick}
					{...register('new_password', {
						required: 'Укажите пароль!',
						minLength: {
							value: 8,
							message: 'Пароль должен содержать минимум 8 символов!'
						}
					})}
					errorsMessage={errors.new_password && errors.new_password?.message}
					state={errors.new_password && 'error'}
				/>
				{errors.new_password && <>{errors.new_password.root}</>}
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
						validate: value => value === password || 'Пароли не совпадают!'
					})}
					errorsMessage={
						errors.confirmPassword && errors.confirmPassword?.message
					}
					state={errors.confirmPassword && 'error'}
				/>
				{errors.confirmPassword && <>{errors.confirmPassword.root}</>}
				<Button>Изменить пароль</Button>
			</form>
		</div>
	)
}

export default ChangePassword
