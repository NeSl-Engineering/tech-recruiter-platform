'use client'

import Avatar from '@/components/ui/avatar-uploader/AvatarUploader'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { LK_PAGES } from '@/config/lk-pages-url.config'
import { IProfile } from '@/types/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import styles from './Profile.module.scss'
import { useProfile } from './hooks/useProfile'
import { usePutProfile } from './hooks/useProfileCreate'
import { useProfileUsername } from './hooks/useProfileUsername'

const Profile = () => {
	const [isError, setIsError] = useState(false)
	const [avatar, setAvatar] = useState('')
	const { putProfile, isSuccess } = usePutProfile()
	const { data, isLoading } = useProfile()

	const {
		register,
		handleSubmit,
		reset,
		getValues,
		setValue,
		watch,
		formState: { errors }
	} = useForm<IProfile>({
		mode: 'onChange'
	})

	const { dataUsername, isLoadingUserName, refetch } = useProfileUsername(
		watch('username')
	)

	useEffect(() => {
		setValue('first_name', data?.first_name)
		setValue('last_name', data?.last_name)
		setValue('username', data?.username)
		setValue('telegram_nickname', data?.telegram_nickname)
		setValue('email', data?.email)
	}, [data])

	const onSubmit: SubmitHandler<IProfile> = data => {
		putProfile(data)
		toast.success('Успешно!')
		reset()
	}

	return (
		<div className={styles.profile}>
			<h1 className={styles.title}>Редактировать профиль</h1>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					id='first_name'
					label='Имя'
					placeholder='Николай'
					standardStyle
					{...register('first_name', {
						required: 'Укажите имя!'
					})}
					errorsMessage={errors.first_name && errors.first_name?.message}
					state={errors.first_name || (isError && 'error')}
				/>
				<Field
					id='last_name'
					label='Фамилия'
					placeholder='Басков'
					standardStyle
					{...register('last_name', {
						required: 'Укажите имя!'
					})}
					errorsMessage={errors.last_name && errors.last_name?.message}
					state={errors.last_name || (isError && 'error')}
				/>
				<Field
					id='username'
					label='Никнейм'
					placeholder='baskov_nikolay'
					standardStyle
					{...register('username', {
						required: 'Укажите имя!'
					})}
					errorsMessage={errors.username && errors.username?.message}
					state={errors.username || (isError && 'error')}
				/>
				<Field
					id=''
					label='Пароль'
					placeholder='*********'
					standardStyle
					placeholderBigText
					disabled
				/>
				<Link href={LK_PAGES.CHANGE_PASSWORD} className={styles.changePassword}>
					Изменить пароль
				</Link>
				<Field
					id='telegram_nickname'
					label='Ваш телеграмм'
					placeholder='@orazowd77'
					standardStyle
					{...register('telegram_nickname', {
						required: 'Укажите имя!'
					})}
					errorsMessage={
						errors.telegram_nickname && errors.telegram_nickname?.message
					}
					state={errors.telegram_nickname || (isError && 'error')}
				/>
				<Field
					id='email'
					label='Э-мейл'
					placeholder='example@gmail.com'
					standardStyle
					disabled
					{...register('email', {
						required: 'Укажите почту!',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'Укажите правильный формат почты!'
						}
					})}
					errorsMessage={errors.email && errors.email?.message}
					state={errors.email || (isError && 'error')}
				/>
				{errors.email && errors.email.type && <>{errors.email.root}</>}
				<Avatar imgPath={avatar} heightFull label='Картинка автора' />
				<div></div>
				<Button>Сохранить</Button>
			</form>
		</div>
	)
}

export default Profile
