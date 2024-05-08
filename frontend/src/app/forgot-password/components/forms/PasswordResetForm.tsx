import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import Loader from '@/components/ui/Loader'
import { forgotPasswordService } from '@/services/forgot-password.service'
import { IResendOtp } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

const PasswordResetForm = ({
	pushNextIndex
}: {
	pushNextIndex: () => void
}) => {
	const [isError, setIsError] = useState(false)
	const [isShake, setIsShake] = useState(false)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		getValues,
		formState: { errors }
	} = useForm<IResendOtp>({
		mode: 'onChange'
	})

	const { mutate: mutatePasswordReset, isPending } = useMutation({
		mutationKey: ['forgotPassword'],
		mutationFn: (data: IResendOtp) => forgotPasswordService.passwordReset(data),
		onError() {
			toast.error('Не правильный э-мейл!')
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
			toast.success('Код сброс пароля было отправлено на вашу почту!')
			reset()
			pushNextIndex()
		}
	})

	const onSubmit: SubmitHandler<IResendOtp> = data => {
		mutatePasswordReset(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Toaster position='top-right' />
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
			<Button className='h-[10px]' disabled={isPending}>
				{isPending ? <Loader /> : 'Отправить'}
			</Button>
		</form>
	)
}

export default PasswordResetForm
