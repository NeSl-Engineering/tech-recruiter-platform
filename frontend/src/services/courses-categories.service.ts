import { axiosClassic, axiosWithAuth } from '@/api/interceptors'
import { ICourses } from '@/types/types'

class CourseCategoriesService {
	private BASE_URL = '/course-categories'

	async getCourseCategories(): Promise<ICourses[]> {
		const response = await axiosClassic.get(`${this.BASE_URL}/`)
		return response.data
	}

	async getCourseCategoriesId(id: string): Promise<ICourses> {
		const response = await axiosClassic.get(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const courseCategoriesService = new CourseCategoriesService()
