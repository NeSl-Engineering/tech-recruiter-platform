import { blogService } from '@/services/blog.service'
import { useQuery } from '@tanstack/react-query'

export function useBlogTagsId(id: string) {
	const {
		data: dataTagsId,
		isLoading: isLoadingTagsId,
		refetch,
		isError
	} = useQuery({
		queryKey: ['tags-id', id],
		queryFn: () => blogService.getBlogTagsId(id)
	})

	return { dataTagsId, isLoadingTagsId, refetch, isError }
}
