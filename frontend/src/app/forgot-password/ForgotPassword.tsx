'use client'

import LogRegLayout from '@/components/logreg-layout/LogRegLayout'
import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import OtpInputEx from '@/components/ui/otp-input/OtpInputEx'
import TransitionHalfSec from '@/components/ui/transitions/TransitionOpacity'
import TransitionX from '@/components/ui/transitions/TransitionX'
import { forgotPasswordService } from '@/services/forgot-password.service'
import { IValidateToken } from '@/types/types'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import ConfirmResetPassword from './components/forms/ConfirmResetPassword'
import PasswordResetForm from './components/forms/PasswordResetForm'

const ForgotPassword = ({ itemProp }: { itemProp?: string }) => {
	const [currentForm, setCurrentForm] = useState('1')
	const [token, setToken] = useState('')
	const {
		handleSubmit,
		reset,
		setValue,
		getValues,

		formState: { errors }
	} = useForm<IValidateToken>()

	const { mutate: mutateValidateToken } = useMutation({
		mutationKey: ['validate-token'],
		mutationFn: (data: IValidateToken) => forgotPasswordService.postToken(data),
		onError() {
			toast.error('Ошибка!')
		},
		onSuccess() {
			toast.success('Успешно. Введите новый пароль!')
			reset()
			setCurrentForm('3')
		}
	})

	const onOtpSubmit = (otp: any) => {
		setValue('token', otp)
		setToken(otp)
	}

	const onSubmit: SubmitHandler<IValidateToken> = data => {
		mutateValidateToken(data)
	}

	return (
		<LogRegLayout text='Пожалуйста выполните эти действия для сброса пароля!'>
			<Toaster position='top-right' />
			<div className={`${stylesLayout.box} ${stylesLayout.box2}`}>
				<TransitionHalfSec>
					{currentForm === '1' ? (
						<PasswordResetForm pushNextIndex={() => setCurrentForm('2')} />
					) : currentForm === '2' ? (
						<>
							<TransitionX>
								<Toaster position='top-right' />

								<form onSubmit={handleSubmit(onSubmit)}>
									<div className={stylesLayout.content}>
										<h1>Код подтверждение</h1>
										<p>
											Введите одноразовый код подтверждение который мы отправили
											вам на почту.
										</p>
									</div>
									<OtpInputEx length={5} onOtpSubmit={onOtpSubmit} />
									<Button onClick={handleSubmit(onSubmit)}>Подтвердить</Button>
								</form>
							</TransitionX>
						</>
					) : currentForm === '3' ? (
						<ConfirmResetPassword itemProp={token} />
					) : (
						''
					)}
				</TransitionHalfSec>
			</div>
		</LogRegLayout>
	)
}

export default ForgotPassword
