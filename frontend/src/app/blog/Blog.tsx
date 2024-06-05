'use client'

import BlogItems from '@/components/main/blog-items/BlogItems'
import buttonGroupStyles from '@/components/main/button-group/ButtonGroup.module.scss'
import Contacts from '@/components/main/contacts/Contacts'
import SubscribeLink from '@/components/main/subscribe-link/SubscribeLink'
import TitleSearch from '@/components/main/title-search/TitleSearch'
import { useState } from 'react'
import styles from './Blog.module.scss'
import { useBlog } from './hooks/useBlog'
import { useBlogTags } from './hooks/useBlogTags'
import { useBlogTagsId } from './hooks/useBlogTagsId'

const Blog = () => {
	const { dataTags, isLoadingTags } = useBlogTags()
	const { dataBlog, isLoadingBlog } = useBlog()
	const [selected, setSelected] = useState<any>(null)

	const handleClick = (e: any) => {
		setSelected(e)
		setTimeout(() => {}, 0)
	}
	const { dataTagsId, isLoadingTagsId } = useBlogTagsId(selected)

	return (
		<div className={styles.blog}>
			<TitleSearch />
			<div className={buttonGroupStyles.buttonGroup}>
				<div className='__container'>
					<div className={buttonGroupStyles.row}>
						<button
							className={`${buttonGroupStyles.button} ${
								selected > 0 ? '' : buttonGroupStyles.active
							}`}
							onClick={() => setSelected(null)}
						>
							Все статьи
						</button>
						{dataTags?.map(item => (
							<button
								key={item.id}
								onClick={() => handleClick(item.id)}
								className={`${buttonGroupStyles.button} ${
									item.id === selected ? buttonGroupStyles.active : ''
								}`}
							>
								{item.title}
							</button>
						))}
					</div>
				</div>
			</div>
			<BlogItems
				data={dataBlog}
				dataTagId={dataTagsId}
				isLoadingTagId={isLoadingTagsId}
				isLoading={isLoadingTags}
			/>
			<SubscribeLink />
			<Contacts />
		</div>
	)
}

export default Blog
