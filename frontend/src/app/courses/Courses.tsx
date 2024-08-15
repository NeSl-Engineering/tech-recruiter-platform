import CommunityTelegram from '@/components/main/community-telegram/CommunityTelegram'
import Contacts from '@/components/main/contacts/Contacts'
import SubscribeLink from '@/components/main/subscribe-link/SubscribeLink'
import ItRecruiter from './components/it-recruiting/ItRecruiter'
import ProfessionRecruiter from './components/profession-recruiter/ProfessionRecruiter'
import RegisterWatch from './components/register-watch/RegisterWatch'
import WhoNeed from './components/who-need/WhoNeed'
import WhyRecruiter from './components/why-recruiter/WhyRecruiter'
import styles from './Courses.module.scss'

const Courses = () => {
	return (
		<div className={styles.courses}>
			<div className='__container'>
				<ProfessionRecruiter />
				<ItRecruiter />
				<WhyRecruiter />
				<WhoNeed />
			</div>
			<RegisterWatch />
			<CommunityTelegram />
			<SubscribeLink />
			<Contacts />
		</div>
	)
}

export default Courses
