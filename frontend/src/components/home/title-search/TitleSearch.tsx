import IconUI from '@/components/ui/icon/Icon'
import styles from './TitleSearch.module.scss'

const TitleSearch = () => {
	return (
		<div className={styles.titleSearch}>
			<div className='__container'>
				<h1>Tech-recruiter - Академия по обучению IT-рекрутеров 👌🏼 </h1>

				<div className={styles.searchWrapper}>
					<input
						type='search'
						placeholder='Найди свой курс'
						className={styles.input}
					/>
					<div className={styles.searchIcon}>
						<IconUI icon='search' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TitleSearch
