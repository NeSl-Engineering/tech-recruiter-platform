import HomeLayout from '@/components/home-layout/HomeLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import Oferta from './Oferta'

export const metadata: Metadata = {
	title: `Публичная оферта ${SITE_NAME}`
}

const BlogPage = () => {
	return (
		<HomeLayout>
			<Oferta />
		</HomeLayout>
	)
}

export default BlogPage
