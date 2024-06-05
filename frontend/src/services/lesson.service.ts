import { axiosWithAuth } from '@/api/interceptors'
import { ILesson } from '@/types/types'

class LessonService {
	private BASE_URL = '/lessons'

	async getLessons(id: string) {
		const response = await axiosWithAuth.get<ILesson[]>(`${this.BASE_URL}/?module__slug=${id}`)
		return response?.data
	}
}

export const lessonService = new LessonService()
