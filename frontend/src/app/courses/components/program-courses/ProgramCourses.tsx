'use client'
import IconUI from '@/components/ui/icon/Icon'
import { useState } from 'react'
import styles from './ProgramCourses.module.scss'

const ProgramCourses = () => {
	const [isOpened, setIsOpened] = useState(false)
	return (
		<div className={styles.ProgramCourses}>
			<h2 className={styles.title}>Программа курса</h2>
			<div className={styles.modules}>
				<div className={styles.module}>
					<div onClick={() => setIsOpened(!isOpened)} className={styles.box}>
						<div
							className={`${
								isOpened
									? styles.boxTitleOpened + ' ' + styles.boxTitle
									: styles.boxTitle
							}`}
						>
							БЛОК 1. Погружение в профессию
						</div>
						<div className={`${isOpened ? styles.close : styles.plus}`}>
							<IconUI icon='plus' />
						</div>
					</div>
					{isOpened && (
						<ul className={styles.moduleList}>
							<li className={styles.moduleListItem}>
								Урок 25. Основные правила коммуникации с заказчиком
							</li>
							<li className={styles.moduleListItem}>
								Урок 25. Основные правила коммуникации с заказчиком
							</li>
							<li className={styles.moduleListItem}>
								Урок 25. Основные правила коммуникации с заказчиком
							</li>
						</ul>
					)}
				</div>
				<div className={styles.module}>
					<div onClick={() => setIsOpened(!isOpened)} className={styles.box}>
						<div
							className={`${
								isOpened
									? styles.boxTitleOpened + ' ' + styles.boxTitle
									: styles.boxTitle
							}`}
						>
							БЛОК 2. IT профессии
						</div>
						<div className={`${isOpened ? styles.close : styles.plus}`}>
							<IconUI icon='plus' />
						</div>
					</div>
					{isOpened && (
						<ul className={styles.moduleList}>
							<li className={styles.moduleListItem}>
								Урок 1. Основные правила коммуникации с заказчиком
							</li>
						</ul>
					)}
				</div>
				<div className={`${styles.module} ${styles.bgRed}`}>
					<div onClick={() => setIsOpened(!isOpened)} className={styles.box}>
						<div
							className={`${
								isOpened
									? styles.boxTitleOpened + ' ' + styles.boxTitle
									: styles.boxTitle
							}`}
						>
							БОНУСНЫЕ УРОКИ:{' '}
						</div>
						<div className={`${isOpened ? styles.close : styles.plus}`}>
							<IconUI icon='plus' />
						</div>
					</div>
					{isOpened && (
						<ul className={styles.moduleList}>
							<li className={styles.moduleListItem}>
								Урок 1. Основные правила коммуникации с заказчиком
							</li>
						</ul>
					)}
				</div>
				<div className={`${styles.module} ${styles.bgRed}`}>
					<div onClick={() => setIsOpened(!isOpened)} className={styles.box}>
						<div
							className={`${
								isOpened
									? styles.boxTitleOpened + ' ' + styles.boxTitle
									: styles.boxTitle
							}`}
						>
							ВОЗМОЖНОСТЬ ТРУДОУСТРОИТЬСЯ ПОСЛЕ КУРСА{' '}
						</div>
						<div className={`${isOpened ? styles.close : styles.plus}`}>
							<IconUI icon='plus' />
						</div>
					</div>
					{isOpened && (
						<ul className={styles.moduleList}>
							<li className={styles.moduleListItem}>
								Урок 1. Основные правила коммуникации с заказчиком
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProgramCourses
