'use client'

import { useCourses } from '../../hooks/useCourses'
import styles from './ItRecruiter.module.scss'

const ItRecruiter = () => {
	const { data } = useCourses()

	return (
		<div className={styles.ItRecruiter}>
			<h1 className={styles.title}>{data && data[0].block1_title}</h1>
			<div className={styles.rows}>
				<div className={styles.item}>
					<h1 className={styles.count}>01</h1>
					<h2 className={styles.itemTitle}>
						{data && data[0].block1_subtitle1}
					</h2>
					<p className={styles.description}>
						{data && data[0].block1_content1}
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.count}>02</h1>
					<h2 className={styles.itemTitle}>
						{data && data[0].block1_subtitle2}
					</h2>
					<p className={styles.description}>
						{data && data[0].block1_content2}
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.count}>03</h1>
					<h2 className={styles.itemTitle}>
						{data && data[0].block1_subtitle3}
					</h2>
					<p className={styles.description}>
						{data && data[0].block1_content3}
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.count}>04</h1>
					<h2 className={styles.itemTitle}>
						{data && data[0].block1_subtitle4}
					</h2>
					<p className={styles.description}>
						{data && data[0].block1_content4}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ItRecruiter
