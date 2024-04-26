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
			passwordEye,
			isPasswordIcon,
			errorsMessage,
			handlePasswordClick,
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
							isShake: isShake,
							error: state
						})}`}
						{...rest}
					/>
					{isPasswordIcon && (
						<>
							{passwordEye ? (
								<div className={styles.appendIcon}>
									<IconUI icon='eye' onClick={handlePasswordClick} />
								</div>
							) : (
								<div className={styles.appendIcon}>
									<IconUI icon='eyeClose' onClick={handlePasswordClick} />
								</div>
							)}
						</>
					)}
					{appendIcon && (
						<div className={styles.appendIcon}>
							<IconUI icon={appendIcon} />
						</div>
					)}
				</div>
				<div className={styles.errorMessage}>{errorsMessage}</div>
			</div>
		)
	}
)

Field.displayName = 'field'
