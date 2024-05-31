import { axiosWithAuth } from '@/api/interceptors'
import { ILesson } from '@/types/types'

class LessonService {
	private BASE_URL = '/lessons'

	async getLessons() {
		const response = await axiosWithAuth.get<ILesson[]>(`${this.BASE_URL}/`)
		return response?.data
	}
}

export const lessonService = new LessonService()
