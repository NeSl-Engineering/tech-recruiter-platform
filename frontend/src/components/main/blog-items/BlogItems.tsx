import { BASE_IMAGE_URL } from '@/api/interceptors'
import Loader from '@/components/ui/loader/Loader'
import { IBlog, IBlogTag } from '@/types/types'
import Link from 'next/link'
import styles from './BlogItems.module.scss'

const BlogItems = ({
	data,
	dataTagId,
	isLoading,
	isLoadingTagId
}: {
	data?: IBlog[]
	dataTagId?: IBlogTag
	isLoading: boolean
	isLoadingTagId: boolean
}) => {
	return (
		<div className={styles.blogItems}>
			<div className='__container'>
				<div className={styles.row}>
					<>
						{dataTagId?.id ? (
							<>
								{isLoadingTagId ? (
									<Loader />
								) : (
									<>
										{dataTagId.posts.length ? (
											<>
												{dataTagId.posts.map(item => (
													<>
														<div key={item.id} className={styles.item}>
															<div className={styles.image}>
																{/* <Image
																	src='/blog.svg'
																	alt='blog'
																	fill
																	sizes='auto'
																/> */}
																<img
																	src={`${BASE_IMAGE_URL}/${item.image?.slice(
																		43
																	)}`}
																	alt={item.title}
																/>
															</div>
															<h2 className={styles.title}>{item.title}</h2>
															<p
																dangerouslySetInnerHTML={{
																	__html: item.content
																}}
																className={styles.description}
															/>
															<div className={styles.buttons}>
																{item?.tags.map(name => (
																	<button
																		title={name}
																		className={styles.button}
																	>
																		{name}
																	</button>
																))}
															</div>
														</div>
													</>
												))}
											</>
										) : (
											<h2 className={styles.emptyDataText}>'Пусто...'</h2>
										)}
									</>
								)}
							</>
						) : (
							<>
								{data?.map(item => (
									<div key={item.id} className={styles.item}>
										<Link href={`/blog/${item.id}`} className={styles.image}>
											{/* <Image src='/blog.svg' alt='blog' fill sizes='auto' /> */}
											<img
												src={`${BASE_IMAGE_URL}/${item.image?.slice(43)}`}
												alt={item.title}
											/>
										</Link>
										<Link href={`/blog/${item.id}`}>
											<h2 className={styles.title}>{item.title}</h2>
										</Link>
										<Link href={`/blog/${item.id}`}>
											<p
												dangerouslySetInnerHTML={{ __html: item.content }}
												className={styles.description}
											/>
										</Link>

										<div className={styles.buttons}>
											{item?.tags.map(name => (
												<button
													key={name}
													title={name}
													className={styles.button}
												>
													{name}
												</button>
											))}
										</div>
									</div>
								))}
							</>
						)}
					</>
				</div>
			</div>
		</div>
	)
}

export default BlogItems
