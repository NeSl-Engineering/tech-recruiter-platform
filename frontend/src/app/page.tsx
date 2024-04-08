import HomeLayout from '@/components/home-layout/HomeLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import Home from './Home'

export const metadata: Metadata = {
	title: `Школа IT-рекрутинга ${SITE_NAME}`
}

export default function HomePage() {
	return (
		<HomeLayout>
			<Home />
		</HomeLayout>
	)
}
