import HomeLayout from '@/components/home-layout/HomeLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import BlogId from './BlogId'

export const metadata: Metadata = {
	title: `Блог ${SITE_NAME}`
}

const page = ({ params }: { params: { id: string } }) => {
	return (
		<HomeLayout>
			<BlogId params={params} />
		</HomeLayout>
	)
}

export default page
