export interface InputFieldProps {
	id: string
	label?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	isShake?: Boolean
	disabled?: boolean
	type?: string
	isNumber?: boolean
	numberThousand?: boolean
	forgotPassword?: boolean
	standardStyle?: boolean
	prevIcon?: boolean
	appendIcon?: string
	maxLength?: number
	passwordEye?: boolean
	isPasswordIcon?: boolean
	errorsMessage?: string
	handlePasswordClick?: () => void
	onFocus?: () => void
}
