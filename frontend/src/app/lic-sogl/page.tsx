import HomeLayout from '@/components/home-layout/HomeLayout'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import PolytObrab from './LicSog'

export const metadata: Metadata = {
	title: `ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ ${SITE_NAME}`
}

const LicSogPage = () => {
	return (
		<HomeLayout>
			<PolytObrab />
		</HomeLayout>
	)
}

export default LicSogPage
