import { courseService } from '@/services/courses.service'
import { useQuery } from '@tanstack/react-query'

export function useCourses() {
	const { data, isLoading, refetch, isError } = useQuery({
		queryKey: ['courses'],
		queryFn: () => courseService.getCourses()
	})

	return { data, isLoading, refetch, isError }
}
