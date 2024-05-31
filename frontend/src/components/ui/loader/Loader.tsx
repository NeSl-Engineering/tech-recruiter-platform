import { Loader2 } from 'lucide-react'
import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<Loader2 className={styles.loading} />
		</div>
	)
}

export default Loader
