'use client'

import { searchService } from '@/services/search.service'
import { useQuery } from '@tanstack/react-query'

export function useSearch(query: string) {
	const {
		data: dataSearch,
		isLoading: isLoadingSearch,
		refetch,
		isError
	} = useQuery({
		queryKey: ['search', query],
		queryFn: async () => {
			const delay = 2000
			await new Promise(resolve => setTimeout(resolve, delay))
			return searchService.getSearchedData(query)
		}
	})

	return { dataSearch, isLoadingSearch, refetch, isError }
}
