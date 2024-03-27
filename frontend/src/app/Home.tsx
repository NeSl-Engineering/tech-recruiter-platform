import ChooseCourse from '@/components/home/choose-course/ChooseCourse'
import FavouriteCompanies from '@/components/home/favourite-companies/FavouriteCompanies'
import MapCourses from '@/components/home/map-courses/MapCourses'
import OurCompany from '@/components/home/our-company/OurCompany'
import TitleSearch from '@/components/home/title-search/TitleSearch'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles.home}>
			<TitleSearch />
			<OurCompany />
			<FavouriteCompanies />
			<MapCourses />
			<ChooseCourse />
		</div>
	)
}

export default Home
