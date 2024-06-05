import { blogService } from '@/services/blog.service'
import { useQuery } from '@tanstack/react-query'

export function useBlogTags() {
	const {
		data: dataTags,
		isLoading: isLoadingTags,
		refetch,
		isError
	} = useQuery({
		queryKey: ['tags'],
		queryFn: () => blogService.getBlogTags()
	})

	return { dataTags, isLoadingTags, refetch, isError }
}
