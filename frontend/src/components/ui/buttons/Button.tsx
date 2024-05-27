import classNames from 'classnames/bind'
import * as React from 'react'
import styles from './Button.module.scss'
import { ButtonProps } from './button.types'

const cx = classNames.bind(styles)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			notActive,
			deleteButton,
			cyanButton,
			blueTransparent,
			whiteButton,
			whiteTransparent,
			widthFull,
			disabled,
			disabledTransparent,
			className,
			radius,
			py,
			onClick
		},
		ref
	) => {
		return (
			<button
				onClick={onClick}
				className={`${className} ${cx({
					button: true,
					notActive: notActive,
					delete: deleteButton,
					cyanButton: cyanButton,
					blueTransparent: blueTransparent,
					whiteButton: whiteButton,
					whiteTransparent: whiteTransparent,
					widthFull: widthFull,
					disabled: disabled,
					disabledTransparent: disabledTransparent
				})}`}
				disabled={disabled || disabledTransparent}
				ref={ref}
				style={{ borderRadius: radius, paddingBottom: py, paddingTop: py }}
			>
				{children}
			</button>
		)
	}
)
Button.displayName = 'Button'

export { Button }
