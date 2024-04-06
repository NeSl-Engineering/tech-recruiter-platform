import IconUI from '../icon/Icon'
import styles from './Checkbox.module.scss'

const Checkbox = ({
	isTickOpen,
	text,
	handleChange
}: {
	isTickOpen: boolean
	text: string
	handleChange: () => void
}) => {
	return (
		<div
			onClick={handleChange}
			className={`${styles.Checkbox} ${isTickOpen && styles.active}`}
		>
			<div className={styles.notActiveTick}>
				<IconUI icon='tickNotAccept' />
			</div>
			<div className={styles.activeTick}>
				<IconUI icon='tickAccept' />
			</div>
			<h3>{text}</h3>
		</div>
	)
}

export default Checkbox
