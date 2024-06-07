import { blogService } from '@/services/blog.service'
import { useQuery } from '@tanstack/react-query'

export function useBlog() {
	const {
		data: data,
		isLoading: isLoading,
		refetch,
		isError
	} = useQuery({
		queryKey: ['blog'],
		queryFn: () => blogService.getBlog()
	})

	return { data, isLoading, refetch, isError }
}
