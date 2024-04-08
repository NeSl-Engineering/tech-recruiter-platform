import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import TransitionOpacity from '@/components/ui/transitions/TransitionOpacity'
import { TypeUserForm } from '@/types/auth.types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormRegister } from './form-register.types'

const FirstFormRegister = ({ pushNextIndex }: IFormRegister) => {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data
		// mutate({
		// 	...rest,
		// 	password: password || undefined
		// })
		pushNextIndex()
	}
	return (
		<TransitionOpacity>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					id='name'
					label='Имя и фамилия'
					placeholder='Имя и фамилия'
					standardStyle
					{...register('name')}
				/>
				<Field
					id='email'
					label='Email Address'
					placeholder='Email Address'
					standardStyle
					{...register('email')}
					// state='error'
					// isShake
				/>
				<Button>Продолжить</Button>
			</form>
		</TransitionOpacity>
	)
}

export default FirstFormRegister
