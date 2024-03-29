import { forwardRef } from 'react'
import styles from './Field.module.scss'

interface InputFieldProps {
	id: string
	label?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, type, placeholder, state, disabled, isNumber, ...rest },
		ref
	) => {
		return (
			<div className={styles.inputWrapper}>
				<label
					htmlFor={id}
					className={`text-sm text-white/60 dark:text-white ml-1.5 font-medium`}
				>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className={`${styles.input} ${
						disabled === true
							? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
							: state === 'error'
							? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400'
							: state === 'success'
							? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400'
							: ''
					}`}
					{...rest}
				/>
			</div>
		)
	}
)

Field.displayName = 'field'
