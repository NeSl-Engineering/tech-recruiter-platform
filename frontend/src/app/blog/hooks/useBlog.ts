import { blogService } from '@/services/blog.service'
import { useQuery } from '@tanstack/react-query'

export function useBlog() {
	const {
		data: dataBlog,
		isLoading: isLoadingBlog,
		refetch,
		isError
	} = useQuery({
		queryKey: ['blog'],
		queryFn: () => blogService.getBlog()
	})

	return { dataBlog, isLoadingBlog, refetch, isError }
}
