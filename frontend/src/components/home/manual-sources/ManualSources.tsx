import { Button } from '@/components/ui/buttons/Button'
import Image from 'next/image'
import styles from './ManualSources.module.scss'

const ManualSources = () => {
	return (
		<div className={styles.ManualSources}>
			<div className='__container'>
				<div className={styles.row}>
					<div className={styles.left}>
						<h1>Пособие IT-рекрутера 2.0 и Пособие сорсера</h1>
						<div className={styles.buttons}>
							<Button>Купить</Button>
							<Button blueTransparent>Обзор пособий</Button>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.img}>
							<Image src='/manual-sources.svg' alt='manual-sources' fill />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ManualSources
