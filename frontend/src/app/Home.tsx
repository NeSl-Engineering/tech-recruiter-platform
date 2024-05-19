import CaseAnalysis from '@/components/home/case-analysis/CaseAnalysis'
import ChooseCourse from '@/components/home/choose-course/ChooseCourse'
import { useCourses } from '@/components/home/choose-course/hooks/useCourses'
import CommunityTelegram from '@/components/home/community-telegram/CommunityTelegram'
import Contacts from '@/components/home/contacts/Contacts'
import CorporativeLearning from '@/components/home/corporative-learning/CorporativeLearning'
import FavouriteCompanies from '@/components/home/favourite-companies/FavouriteCompanies'
import ManualSources from '@/components/home/manual-sources/ManualSources'
import MapCourses from '@/components/home/map-courses/MapCourses'
import OurCompany from '@/components/home/our-company/OurCompany'
import SubscribeLink from '@/components/home/subscribe-link/SubscribeLink'
import TimeTable from '@/components/home/time-table/TimeTable'
import TitleSearch from '@/components/home/title-search/TitleSearch'
import styles from './Home.module.scss'

const Home = () => {
	// const { dataCourses, isLoadingCourses, isErrorCourses, refetchCourses } =
	// 	useCourses()
	return (
		<div className={styles.home}>
			<TitleSearch />
			<OurCompany />
			<FavouriteCompanies />
			<MapCourses />

			<ChooseCourse  />

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
