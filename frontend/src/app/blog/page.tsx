import HomeLayout from '@/components/home-layout/HomeLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import Blog from './Blog'

export const metadata: Metadata = {
	title: `Блог ${SITE_NAME}`
}

const BlogPage = () => {
	return (
		<HomeLayout>
			<Blog />
		</HomeLayout>
	)
}

export default BlogPage
