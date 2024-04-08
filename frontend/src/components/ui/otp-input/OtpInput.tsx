import React, { useRef } from 'react'
import styles from './OtpInput.module.scss'

interface Props {
	otp: { [key: number]: any }
	value: (val: any, index: number) => void
}

const OtpInput: React.FC<Props> = ({ otp, value }) => {
	const containerRef = useRef<HTMLDivElement>(null)

	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
		const children = containerRef.current
			?.children as HTMLCollectionOf<HTMLInputElement>

		const keypressed = e.key

		if (i > 0 && (keypressed === 'Backspace' || keypressed === 'Delete')) {
			setTimeout(() => {
				children[i - 1].focus()
				children[i].value = ''
				children[i]?.classList.add(styles.empty)
				value(null, i)
			}, 0)
		} else {
			const matched = keypressed.match(/^[0-9]$/)
			if (!matched) {
				if (!otp || !otp[i === Object.values(otp).length ? i : i - 1]) {
					children[i === Object.values(otp).length ? i : i - 1]?.classList.add(
						styles.empty
					)
				}
				value(null, i)
				return
			} else if (i < Object.values(otp).length - 1) {
				setTimeout(() => {
					children[i + 1].focus()
					children[i]?.classList.remove(styles.empty)
				}, 0)
			}
			value(Number(keypressed), i)
		}
	}

	const handleDown = (
		event: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		const children = containerRef.current
			?.children as HTMLCollectionOf<HTMLInputElement>
		const allowedKeys = [
			'Backspace',
			'Tab',
			'Enter',
			'ArrowLeft',
			'ArrowRight',
			'.'
		]

		if (!allowedKeys.includes(event.key) && !/[0-9]/.test(event.key)) {
			event.preventDefault()
		} else {
			if (index === Object.values(otp).length - 1) {
				children[index]?.classList.add(styles.empty)
			}
		}
	}

	return (
		<div ref={containerRef} className={styles.OtpInput}>
			{Object.values(otp).map((n, index) => (
				<input
					key={index}
					value={n}
					type='text'
					onKeyUp={e => handleEnter(e, index)}
					onKeyDown={e => handleDown(e, index)}
					maxLength={1}
				/>
			))}
		</div>
	)
}
export default OtpInput
