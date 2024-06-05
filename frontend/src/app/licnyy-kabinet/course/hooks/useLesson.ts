import { lessonService } from '@/services/lesson.service'
import { useQuery } from '@tanstack/react-query'

export function useLesson(id: string) {
	const { data, isLoading, refetch, isError } = useQuery({
		queryKey: ['lesson', id],
		queryFn: () => lessonService.getLessons(id)
	})

	return { data, isLoading, refetch, isError }
}
