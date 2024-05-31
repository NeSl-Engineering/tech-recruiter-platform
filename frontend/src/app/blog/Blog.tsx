import BlogItems from '@/components/main/blog-items/BlogItems'
import ButtonGroup from '@/components/main/button-group/ButtonGroup'
import Contacts from '@/components/main/contacts/Contacts'
import SubscribeLink from '@/components/main/subscribe-link/SubscribeLink'
import TitleSearch from '@/components/main/title-search/TitleSearch'
import styles from './Blog.module.scss'

const Blog = () => {
	return (
		<div className={styles.blog}>
			<TitleSearch />
			<ButtonGroup />
			<BlogItems />
			<SubscribeLink />
			<Contacts />
		</div>
	)
}

export default Blog
