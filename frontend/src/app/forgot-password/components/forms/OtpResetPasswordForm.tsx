'use client'

import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import OtpInputEx from '@/components/ui/otp-input/OtpInputEx'
import TransitionX from '@/components/ui/transitions/TransitionX'
import { forgotPasswordService } from '@/services/forgot-password.service'
import { IValidateToken } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { IFormRegister } from './form-register.types'

const FourthFormRegister = ({ pushNextIndex, itemPropFunc }: IFormRegister) => {
	const {
		handleSubmit,
		reset,
		setValue,
		formState: { errors }
	} = useForm<IValidateToken>()

	const { mutate: mutateValidateToken, isPending } = useMutation({
		mutationKey: ['validate-token'],
		mutationFn: (data: IValidateToken) => forgotPasswordService.postToken(data),
		onError() {
			toast.error('Ошибка!')
		},
		onSuccess() {
			toast.success('Успешно. Введите новый пароль!')
			reset()
			pushNextIndex()
		}
	})

	const onOtpSubmit = (otp: any) => {
		setValue('token', otp)
		itemPropFunc(otp)
	}

	const onSubmit: SubmitHandler<IValidateToken> = data => {
		mutateValidateToken(data)
	}

	return (
		<TransitionX>
			<Toaster position='top-right' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={stylesLayout.content}>
					<h1>Код подтверждение</h1>
					<p>
						Введите одноразовый код подтверждение который мы отправили вам на
						почту.
					</p>
				</div>
				<OtpInputEx length={5} onOtpSubmit={onOtpSubmit} />
				<Button onClick={handleSubmit(onSubmit)} disabled={isPending}>
					Подтвердить
				</Button>
			</form>
		</TransitionX>
	)
}

export default FourthFormRegister
