import { coursesService } from '@/services/courses.service'
import { useQuery } from '@tanstack/react-query'

export function useCourses() {
	const {
		data: dataCourses,
		isLoading: isLoadingCourses,
		refetch: refetchCourses,
		isError: isErrorCourses
	} = useQuery({
		queryKey: ['courses'],
		queryFn: () => coursesService.getCourses()
	})

	return { dataCourses, isLoadingCourses, refetchCourses, isErrorCourses }
}
