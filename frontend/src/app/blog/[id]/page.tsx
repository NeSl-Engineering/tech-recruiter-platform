import HomeLayout from '@/components/home-layout/HomeLayout'
import BlogId from './BlogId'

const page = ({ params }: { params: { id: string } }) => {
	return (
		<HomeLayout>
			<BlogId params={params} />
		</HomeLayout>
	)
}

export default page
