import { courseService } from '@/services/courses.service'
import { useQuery } from '@tanstack/react-query'

export function useCourseSlug(id: string) {
	const { data: dataCourseSlug, isLoading: isLoadingCourseSlug, refetch, isError } = useQuery({
		queryKey: ['course-slug', id],
		queryFn: () => courseService.getCoursesSlug(id)
	})

	return { dataCourseSlug, isLoadingCourseSlug, refetch, isError }
}
