import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import TransitionOpacity from '@/components/ui/transitions/TransitionOpacity'
import { useForm } from 'react-hook-form'
import { IFormRegister } from './form-register.types'

const FirstFormRegister = ({ pushNextIndex, onSubmit }: IFormRegister) => {
	const { register, handleSubmit, reset } = useForm<any>({
		mode: 'onChange'
	})

	const onFormSubmit = () => {
		// onSubmit()
		pushNextIndex()
	}

	return (
		<TransitionOpacity>
			<form onSubmit={onFormSubmit}>
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
				/>
				<Button>Продолжить</Button>
			</form>
		</TransitionOpacity>
	)
}

export default FirstFormRegister
