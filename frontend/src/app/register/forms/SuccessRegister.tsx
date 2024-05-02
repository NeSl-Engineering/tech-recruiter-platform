import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { IFormRegister } from './form-register.types'

const SuccessFormRegister = ({ pushNextIndex }: IFormRegister) => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/login')
		}, 5000)
	}, [])

	return (
		<form onSubmit={pushNextIndex}>
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
