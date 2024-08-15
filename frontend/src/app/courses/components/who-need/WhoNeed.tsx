'use client'

import { useCourses } from '../../hooks/useCourses'
import styles from './WhoNeed.module.scss'

const WhoNeed = () => {
	const { data } = useCourses()

	return (
		<div className={styles.WhoNeed}>
			<h1 className={styles.title}>{data && data[0].block2_title}</h1>
			<div className={styles.rows}>
				<div className={styles.item}>
					<h1 className={styles.count}>01</h1>
					<h2 className={styles.itemTitle}>
						{data && data[0].block2_subtitle1}
					</h2>
					<p className={styles.description}>
						{data && data[0].block2_content1}
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.count}>02</h1>
					<h2 className={styles.itemTitle}>
						{data && data[0].block2_subtitle2}
					</h2>
					<p className={styles.description}>
						{data && data[0].block2_content2}
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.count}>03</h1>
					<h2 className={styles.itemTitle}>
						{data && data[0].block2_subtitle3}
					</h2>
					<p className={styles.description}>
						{data && data[0].block2_content3}
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.count}>04</h1>
					<h2 className={styles.itemTitle}>
						{data && data[0].block2_subtitle4}
					</h2>
					<p className={styles.description}>
						{data && data[0].block2_content4}
					</p>
				</div>
			</div>
		</div>
	)
}

export default WhoNeed
