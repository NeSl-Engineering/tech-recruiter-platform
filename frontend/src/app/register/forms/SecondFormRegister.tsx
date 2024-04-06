import stylesLayout from '@/components/logreg-layout/LogRegLayout.module.scss'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormRegister } from './form-register.types'
import TransitionX from '@/components/ui/transitions/TransitionX'

const SecondFormRegister = ({ pushNextIndex }: IFormRegister) => {
	const { register, handleSubmit, reset } = useForm<any>({
		mode: 'onChange'
	})

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
				<div className={stylesLayout.row3}>
					<Field
						id='day'
						label='День'
						placeholder='ДД'
						standardStyle
						maxLength={2}
						{...register('day')}
					/>
					<Field
						id='month'
						label='Месяц'
						placeholder='ММ'
						standardStyle
						maxLength={2}
						{...register('month')}
					/>
					<Field
						id='year'
						label='Год'
						placeholder='ГГ'
						standardStyle
						maxLength={4}
						{...register('year')}
					/>
				</div>
				<Field
					id='telegram'
					label='Ваш телеграм'
					placeholder='@tekeogly'
					standardStyle
					{...register('telegram')}
					// state='error'
					// isShake
				/>
				<Button>Продолжить</Button>
			</form>
		</TransitionX>
	)
}

export default SecondFormRegister
