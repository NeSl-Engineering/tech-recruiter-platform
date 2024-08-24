import CommunityTelegram from '@/components/main/community-telegram/CommunityTelegram'
import Contacts from '@/components/main/contacts/Contacts'
import SubscribeLink from '@/components/main/subscribe-link/SubscribeLink'
import DiplomResume from './components/diplom-resume/DiplomResume'
import DiplomReview from './components/diplom-review/DiplomReview'
import ItRecruiter from './components/it-recruiting/ItRecruiter'
import ProfessionRecruiter from './components/profession-recruiter/ProfessionRecruiter'
import ProgramCourses from './components/program-courses/ProgramCourses'
import RecruiterYours from './components/recruiter-yours/RecruiterYours'
import RegisterWatch from './components/register-watch/RegisterWatch'
import ScheduleCourses from './components/schedule-courses/ScheduleCourses'
import WatchVideo from './components/watch-video/WatchVideo'
import WhoNeed from './components/who-need/WhoNeed'
import WhyRecruiter from './components/why-recruiter/WhyRecruiter'
import YourCurators from './components/your-curators/YourCurators'
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
			<div className='__container'>
				<YourCurators />
			</div>
			<WatchVideo />
			<div className='__container'>
				<ProgramCourses />
				<ScheduleCourses />
			</div>
			<RecruiterYours />
			<div className='__container'>
				<DiplomResume />
				<DiplomReview />
				<ProgramCourses />
			</div>
			<CommunityTelegram />
			<SubscribeLink />
			<Contacts />
		</div>
	)
}

export default Courses
