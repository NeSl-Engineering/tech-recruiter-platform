import { blogService } from '@/services/blog.service'
import { useQuery } from '@tanstack/react-query'

export function useBlogId(id: string) {
	const {
		data: dataBlog,
		isLoading: isLoadingBlog,
		refetch,
		isError
	} = useQuery({
		queryKey: ['blog-id', id],
		queryFn: () => blogService.getBlogId(id)
	})

	return { dataBlog, isLoadingBlog, refetch, isError }
}
