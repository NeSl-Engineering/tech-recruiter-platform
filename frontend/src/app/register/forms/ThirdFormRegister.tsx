import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import TransitionX from '@/components/ui/transitions/TransitionX'
import { SubmitHandler, useForm } from 'react-hook-form'

const ThirdFormRegister = ({
	pushNextIndex
}: {
	pushNextIndex: () => void
}) => {
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
				<Field
					id='name'
					label='Пароль'
					placeholder='Пароль'
					standardStyle
					type='password'
					appendIcon
					{...register('name')}
				/>
				<Field
					id='email'
					label='Повторите пароль'
					placeholder='Повторите пароль'
					standardStyle
					type='password'
					appendIcon
					{...register('email')}
					// state='error'
					// isShake
				/>
				<Button>Продолжить</Button>
			</form>
		</TransitionX>
	)
}

export default ThirdFormRegister
