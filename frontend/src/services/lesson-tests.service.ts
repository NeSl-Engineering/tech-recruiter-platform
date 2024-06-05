import { axiosWithAuth } from '@/api/interceptors'
import { ILessonTest, ILessonTestMutate } from '@/types/types'

class LessonTestService {
	private BASE_URL = '/lesson-tests'

	async getLessonTests(id: string) {
		const response = await axiosWithAuth.get<ILessonTest[]>(
			`${this.BASE_URL}/?lesson=${id}`
		)
		return response?.data
	}

	async postLessonTest(data: ILessonTestMutate): Promise<ILessonTestMutate> {
		const response = await axiosWithAuth.post(`/test-solutions/`, data)

		return response?.data.data
	}
}

export const lessonTestService = new LessonTestService()
