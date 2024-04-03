import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import OtpInput from '@/components/ui/otp-input/OtpInput'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormRegister } from './form-register.types'
import TransitionX from '@/components/ui/transitions/TransitionX'

const FourthFormRegister = ({
	pushNextIndex
}: IFormRegister) => {
	const { register, handleSubmit, reset } = useForm<any>({
		mode: 'onChange'
	})

	const [otp, setOtp] = useState<{ [key: number]: any }>({
		0: null,
		1: null,
		2: null,
		3: null,
		4: null,
		5: null
	})

	const otpValue = (val: any, index: number) => {
		setOtp((prevOtp: any) => ({ ...prevOtp, [index]: val }))
	}

	const onSubmit: SubmitHandler<any> = data => {
		const { password, ...rest } = data
		// mutate({
		// 	...rest,
		// 	password: password || undefined
		// })
		pushNextIndex()
	}
	return (
		<TransitionX>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={stylesLayout.content}>
					<h1>Код подтверждение</h1>
					<p>
						Введите одноразовый код подтверждение который мы отправили вам на
						почту.
					</p>
				</div>
				<OtpInput value={otpValue} otp={otp} />
				<Button>Подтвердить</Button>
				<Button blueTransparent>Отравить код заново</Button>
			</form>
		</TransitionX>
	)
}

export default FourthFormRegister
