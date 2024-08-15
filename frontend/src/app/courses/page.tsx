import HomeLayout from '@/components/home-layout/HomeLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import Courses from './Courses'

export const metadata: Metadata = {
	title: `Курсы ${SITE_NAME}`
}

const CoursesPage = () => {
	return (
		<HomeLayout>
			<Courses />
		</HomeLayout>
	)
}

export default CoursesPage
