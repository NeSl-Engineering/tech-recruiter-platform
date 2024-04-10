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
	forgotPassword?: boolean
	standardStyle?: boolean
	prevIcon?: boolean
	appendIcon?: boolean
	maxLength?: number
}
