import classNames from 'classnames/bind'
import { forwardRef } from 'react'

import IconUI from '../icon/Icon'
import styles from './Field.module.scss'
import { InputFieldProps } from './Field.type'

const cx = classNames.bind(styles)

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{
			label,
			id,
			type,
			placeholder,
			state,
			isShake,
			disabled,
			isNumber,
			standardStyle,
			forgotPassword,
			prevIcon,
			appendIcon,
			maxLength,
			...rest
		},
		ref
	) => {
		return (
			<div className={styles.inputWrapper}>
				<div className={styles.labelWrapper}>
					<label htmlFor={id}>{label}</label>
					{forgotPassword && (
						<h3>
							<a href='/forgot-password'>Забыли пароль?</a>
						</h3>
					)}
				</div>
				<div className={styles.inputBlock}>
					<input
						ref={ref}
						disabled={disabled}
						type={type}
						id={id}
						placeholder={placeholder}
						maxLength={maxLength}
						className={`${cx({
							input: true,
							standardStyle: standardStyle,
							isShake: isShake
						})} ${
							disabled === true
								? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
								: state === 'error'
								? styles.error
								: ''
						}`}
						{...rest}
					/>
					{appendIcon && (
						<div className={styles.appendIcon}>
							<IconUI icon='eye' />
						</div>
					)}
				</div>
			</div>
		)
	}
)

Field.displayName = 'field'
