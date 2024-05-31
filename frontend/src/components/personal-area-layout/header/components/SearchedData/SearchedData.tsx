import IconUI from '@/components/ui/icon/Icon'
import Loader from '@/components/ui/loader/Loader'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'
import { ISearch } from '@/types/search.types'
import Link from 'next/link'
import styles from './SearchedData.module.scss'

const SearchedData = ({
	data,
	isLoading
}: {
	data?: ISearch
	isLoading: boolean
}) => {
	return (
		<div className={styles.SearchedData}>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.courses}>
					<ul className={styles.list}>
					{data?.courses.length || data?.modules.length || data?.posts.length ?(
						<>	{data?.courses.length ? (
							<>
								{data?.courses.map(item => (
									<li className={styles.itemWrapper}>
										<h1 className={styles.title}>Курсы</h1>
										<Link href='/licnyy-kabinet/home' className={styles.item}>
											<div className={styles.sourcing}>
												<h2 className={styles.titleSourcing}>{item.title}</h2>
												<ProgressBar />
											</div>
											<div className={styles.navigation}>
												<IconUI icon='arrowRight' />
											</div>
										</Link>
									</li>
								))}
							</>
						) : null}
						{data?.modules.length ? (
							<>
								{data?.modules.map(item => (
									<li className={styles.item}>
										<h1 className={styles.title}>Модули</h1>
										<Link href='/licnyy-kabinet/home' className={styles.item}>
											<div className={styles.sourcing}>
												<h2 className={styles.titleSourcing}>{item.title}</h2>
												<ProgressBar />
											</div>
											<div className={styles.navigation}>
												<IconUI icon='arrowRight' />
											</div>
										</Link>
									</li>
								))}
							</>
						) : null}
						{data?.posts.length ? (
							<>
								{data?.posts.map(item => (
									<li className={styles.item}>
										<h1 className={styles.title}>Посты</h1>
										<Link href='/licnyy-kabinet/home' className={styles.item}>
											<div className={styles.sourcing}>
												<h2 className={styles.titleSourcing}>{item.title}</h2>
												<ProgressBar />
											</div>
											<div className={styles.navigation}>
												<IconUI icon='arrowRight' />
											</div>
										</Link>
									</li>
								))}
							</>
						) : null}</>
					): 'Пусто...'}
					</ul>
				</div>
			)}
		</div>
	)
}

export default SearchedData
