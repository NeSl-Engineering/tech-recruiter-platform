import { PERSONAL_AREA_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'
import Profile from './Profile'

export const metadata: Metadata = {
	title: `Профиль ${PERSONAL_AREA_NAME}`
}

const ProfilePage = () => {
	return (
		<>
			<Profile />
		</>
	)
}

export default ProfilePage
