'use client'

import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import OtpInputEx from '@/components/ui/otp-input/OtpInputEx'
import TransitionX from '@/components/ui/transitions/TransitionX'
import { authService } from '@/services/auth.service'
import { IEmailVerify } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { IFormRegister } from './form-register.types'

const FourthFormRegister = ({ pushNextIndex, itemProp }: IFormRegister) => {
	const {
		handleSubmit,
		reset,
		setValue,
		formState: { errors }
	} = useForm<IEmailVerify>()

	const { mutate: mutateVerifyEmail } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IEmailVerify) => authService.verifyEmail(data),
		onError() {
			toast.error('Oshibka')
		},
		onSuccess() {
			toast.success('Успешно зашли в систему')
			reset()
			pushNextIndex()
		}
	})

	useEffect(() => {
		if (itemProp) {
			setValue('email', itemProp)
		}
	}, itemProp)

	const onOtpSubmit = (otp: any) => {
		setValue('otp', otp)
	}

	const onSubmit: SubmitHandler<IEmailVerify> = data => {
		mutateVerifyEmail(data)
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
				<OtpInputEx length={6} onOtpSubmit={onOtpSubmit} />
				<Button onClick={handleSubmit(onSubmit)}>Подтвердить</Button>
				<Button blueTransparent>Отравить код заново</Button>
			</form>
		</TransitionX>
	)
}

export default FourthFormRegister
