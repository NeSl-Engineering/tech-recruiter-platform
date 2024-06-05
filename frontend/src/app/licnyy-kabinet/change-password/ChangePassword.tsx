'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { IChangePassword } from '@/types/types'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import styles from './ChangePassword.module.scss'
import { useProfile } from './hooks/useProfile'
import { usePutProfile } from './hooks/useProfileCreate'

const ChangePassword = () => {
	const [isError, setIsError] = useState(false)
	const { putProfile, isSuccess } = usePutProfile()
	const { data, isLoading, refetch } = useProfile()
	console.log(data)

	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors }
	} = useForm<IChangePassword>({
		mode: 'onChange'
	})

	const [passwordEye, setPasswordEye] = useState(false)
	const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)

	const handlePasswordClick = () => {
		setPasswordEye(!passwordEye)
	}

	const handleConfirmPasswordClick = () => {
		setConfirmPasswordEye(!confirmPasswordEye)
	}

	// useEffect(() => {
	// 	setAvatar(`${data?.avatar}`)
	// 	setValue('fullName', data?.fullName)
	// 	setValue('phoneNumber', data?.phoneNumber)
	// 	setValue('role', data?.role)
	// }, [data])

	const onSubmit: SubmitHandler<IChangePassword> = data => {
		// putProfile(data)
		toast.success('Успешно!')
		reset()
	}

	return (
		<div className={styles.changePassword}>
			<h1 className={styles.title}>Изменить пароль</h1>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					id='first_name'
					label='Имя'
					placeholder='Николай'
					standardStyle
					{...register('old_password', {
						required: 'Укажите имя!'
					})}
					errorsMessage={errors.old_password && errors.old_password?.message}
					state={errors.old_password || (isError && 'error')}
				/>
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
						validate: value => value === 'password' || 'Пароли не совпадают!'
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
