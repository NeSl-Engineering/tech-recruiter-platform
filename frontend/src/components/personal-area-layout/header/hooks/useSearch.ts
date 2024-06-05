'use client'

import { searchService } from '@/services/search.service'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useSearch(query: string) {
	const [debouncedQuery, setDebouncedQuery] = useState(query)
	const [delay, setDelay] = useState(500)
	const {
		data: dataSearch,
		isLoading: isLoadingSearch,
		refetch,
		isError
	} = useQuery({
		queryKey: ['search', debouncedQuery],
		queryFn: async () => {
			return searchService.getSearchedData(debouncedQuery)
		},
		enabled: !!debouncedQuery
	})

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [query, delay])

	return { dataSearch, isLoadingSearch, refetch, isError }
}
