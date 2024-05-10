'use client'

import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import OtpInputEx from '@/components/ui/otp-input/OtpInputEx'
import TransitionX from '@/components/ui/transitions/TransitionX'
import { authService } from '@/services/auth.service'
import { IEmailVerify, IResendOtp } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
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

	const {
		handleSubmit: handleResendOtpSubmit,
		reset: resetResendOtp,
		setValue: setResendOtpValue
		// formState: { errors }
	} = useForm<IResendOtp>()

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

	const { mutate: mutateResendOtp } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IResendOtp) => authService.resendOtp(data),
		onError() {
			toast.error('Oshibka')
		},
		onSuccess() {
			toast.success('Вы отправили заново')
		}
	})

	const [isDisabled, setIsDisabled] = useState(false)
	const [timer, setTimer] = useState(10)
	const minutes = Math.floor(timer / 60)
	const seconds = timer % 60

	useEffect(() => {
		if (itemProp) {
			setValue('email', itemProp)
			setResendOtpValue('email', itemProp)
		}

		const interval = setInterval(() => {
			setTimer((prevTimer: number) => {
				if (prevTimer === 0) {
					setIsDisabled(false)
					setTimer(120)
				}
				return prevTimer - 1
			})
		}, 1000)

		return () => clearInterval(interval)
	}, itemProp)

	const onOtpSubmit = (otp: any) => {
		setValue('otp', otp)
	}

	const onSubmit: SubmitHandler<IEmailVerify> = data => {
		mutateVerifyEmail(data)
	}

	const onResendOtpSubmit: SubmitHandler<IResendOtp> = data => {
		mutateResendOtp(data)
		setIsDisabled(true)
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
				<Button
					blueTransparent
					disabledTransparent={isDisabled}
					onClick={handleResendOtpSubmit(onResendOtpSubmit)}
				>
					{isDisabled ? (
						<span>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
					) : (
						<>Отравить код заново</>
					)}
				</Button>
			</form>
		</TransitionX>
	)
}

export default FourthFormRegister
