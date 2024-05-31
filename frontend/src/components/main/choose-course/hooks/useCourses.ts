import { courseCategoriesService } from '@/services/courses-categories.service'
import { useQuery } from '@tanstack/react-query'

export function useCourses() {
	const {
		data: dataCourses,
		isLoading: isLoadingCourses,
		refetch: refetchCourses,
		isError: isErrorCourses
	} = useQuery({
		queryKey: ['course-categories'],
		queryFn: () => courseCategoriesService.getCourseCategories()
	})

	return { dataCourses, isLoadingCourses, refetchCourses, isErrorCourses }
}
