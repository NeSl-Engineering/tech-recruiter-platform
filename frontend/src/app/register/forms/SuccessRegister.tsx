import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormRegister } from './form-register.types'

const SuccessFormRegister = ({ pushNextIndex }: IFormRegister) => {
	const { register, handleSubmit, reset } = useForm<any>({
		mode: 'onChange'
	})

	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/licnyy-kabinet')
		}, 3000)
	}, [])

	const onSubmit: SubmitHandler<any> = data => {
		const { password, ...rest } = data
		// mutate({
		// 	...rest,
		// 	password: password || undefined
		// })
		pushNextIndex()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={stylesLayout.content}>
				<div className={stylesLayout.img}>
					<Image src='/success-register.svg' alt='success' fill />
				</div>
				<h1>Поздравляем!</h1>
				<p>
					Вы успешно прошли регистрацию, через пару секунд вас перенаправят в
					личный кабинет.
				</p>
			</div>
			<Button>Продолжить</Button>
		</form>
	)
}

export default SuccessFormRegister
