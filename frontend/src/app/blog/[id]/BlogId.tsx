'use client'

import { BASE_IMAGE_URL } from '@/api/interceptors'
import Link from 'next/link'
import { useBlog } from '../hooks/useBlog'
import { useBlogId } from '../hooks/useBlogId'
import styles from './BlogId.module.scss'
import BlogIdShimmer from './components/shimmers/BlogIdShimmer'

const BlogId = ({ params }: { params: { id: string } }) => {
	const { dataBlog, isLoadingBlog } = useBlogId(params.id)
	const { data, isLoading } = useBlog()
	
	return (
		<div className={styles.BlogId}>
			<div className='__container'>
				<div className={styles.row}>
					<div className={styles.left}>
						{isLoadingBlog ? (
							<BlogIdShimmer />
						) : (
							<div className={styles.image}>
								{/* <Image
							src={`${BASE_IMAGE_URL}/${dataBlog?.image.slice(43)}`}
							alt='blogImg'
							fill
							sizes='auto'
						/> */}
								<img
									src={`${BASE_IMAGE_URL}/${dataBlog?.image.slice(43)}`}
									alt=''
								/>
							</div>
						)}
						<div className={styles.content}>
							<h2 className={styles.title}>{dataBlog?.title}</h2>
							<div className={styles.buttons}>
								{dataBlog?.tags.map(tag => (
									<button key={tag} className={styles.button}>
										{tag}
									</button>
								))}
							</div>
							<p
								className={styles.description}
								dangerouslySetInnerHTML={{
									__html: dataBlog?.content
								}}
							/>
						</div>
					</div>
					<div className={styles.right}>
						{data?.slice(0, 2).map(item => (
							<Link
								href={`/blog/${item.id}`}
								key={item.id}
								className={styles.item}
							>
								<div className={styles.image}>
									<img
										src={`${BASE_IMAGE_URL}/${item?.image.slice(43)}`}
										alt=''
									/>
								</div>
								<h2 className={styles.title}>{item.title}</h2>
								<p
									className={styles.description}
									dangerouslySetInnerHTML={{
										__html: item?.content
									}}
								></p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogId
