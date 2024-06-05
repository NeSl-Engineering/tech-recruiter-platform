import { ICourse } from '@/types/types'

import { axiosWithAuth } from '@/api/interceptors'

class CourseService {
	private BASE_URL = '/courses'

	async getCoursesDemo() {
		const response = await axiosWithAuth.get<ICourse[]>(
			`${this.BASE_URL}/?is_paid=false`
		)
		return response?.data
	}

	async getCourses() {
		const response = await axiosWithAuth.get<ICourse[]>(
			`${this.BASE_URL}/?is_paid=true`
		)
		return response?.data
	}

	async getCoursesSlug(slug: string) {
		const response = await axiosWithAuth.get<ICourse>(
			`${this.BASE_URL}/${slug}/`
		)
		return response?.data
	}
}

export const courseService = new CourseService()
