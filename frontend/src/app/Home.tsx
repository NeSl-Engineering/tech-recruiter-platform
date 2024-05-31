import CaseAnalysis from '@/components/main/case-analysis/CaseAnalysis'
import ChooseCourse from '@/components/main/choose-course/ChooseCourse'
import CommunityTelegram from '@/components/main/community-telegram/CommunityTelegram'
import Contacts from '@/components/main/contacts/Contacts'
import CorporativeLearning from '@/components/main/corporative-learning/CorporativeLearning'
import FavouriteCompanies from '@/components/main/favourite-companies/FavouriteCompanies'
import ManualSources from '@/components/main/manual-sources/ManualSources'
import MapCourses from '@/components/main/map-courses/MapCourses'
import OurCompany from '@/components/main/our-company/OurCompany'
import SubscribeLink from '@/components/main/subscribe-link/SubscribeLink'
import TimeTable from '@/components/main/time-table/TimeTable'
import TitleSearch from '@/components/main/title-search/TitleSearch'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles.home}>
			<TitleSearch />
			<OurCompany />
			<FavouriteCompanies />
			<MapCourses />
			<ChooseCourse />
			<TimeTable />
			<CaseAnalysis />
			<ManualSources />
			<CorporativeLearning />
			<CommunityTelegram />
			<SubscribeLink />
			<Contacts />
		</div>
	)
}

export default Home
