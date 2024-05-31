import { axiosWithAuth } from '@/api/interceptors'
import { ICourses } from '@/types/types'

class CourseCategoriesService {
	private BASE_URL = '/course-categories'

	async getCourseCategories(): Promise<ICourses[]> {
		const response = await axiosWithAuth.get(`${this.BASE_URL}/`)
		return response.data
	}

	async getCourseCategoriesId(id: string): Promise<ICourses> {
		const response = await axiosWithAuth.get(`${this.BASE_URL}/${id}`)
		return response.data
	}

	// async deleteCourse(id: any): Promise<any> {
	// 	const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
	// 	return response.data.data
	// }

	// async createCourse(data: ITag) {
	// 	const response = await axiosWithAuth.post(`${this.BASE_URL}`, data)
	// 	return response.data.data
	// }

	// async updateCourse(id: string, data: ITag) {
	// 	const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
	// 	return response
	// }
}

export const courseCategoriesService = new CourseCategoriesService()
