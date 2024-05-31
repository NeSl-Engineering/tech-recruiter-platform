import { courseService } from '@/services/courses.service'
import { useQuery } from '@tanstack/react-query'

export function useCoursesDemo() {
	const {
		data: dataDemo,
		isLoading: isLoadingDemo,
		refetch,
		isError
	} = useQuery({
		queryKey: ['courses-demo'],
		queryFn: () => courseService.getCoursesDemo()
	})

	return { dataDemo, isLoadingDemo, refetch, isError }
}
