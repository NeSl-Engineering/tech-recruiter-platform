import HomeLayout from '@/components/home-layout/HomeLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import PolytObrab from './PolytObrab'

export const metadata: Metadata = {
	title: `Политика в отношении обработки персональных данных
 ${SITE_NAME}`
}

const PolytObrabPage = () => {
	return (
		<HomeLayout>
			<PolytObrab />
		</HomeLayout>
	)
}

export default PolytObrabPage
