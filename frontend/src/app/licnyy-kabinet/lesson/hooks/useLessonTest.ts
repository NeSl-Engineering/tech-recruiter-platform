import { lessonTestService } from '@/services/lesson-tests.service'
import { useQuery } from '@tanstack/react-query'

export function useLessonTests(id: string) {
	const {
		data: data,
		isLoading,
		refetch,
		isError
	} = useQuery({
		queryKey: ['lesson-test', id],
		queryFn: () => lessonTestService.getLessonTests(id)
	})

	return { data, isLoading, refetch, isError }
}
