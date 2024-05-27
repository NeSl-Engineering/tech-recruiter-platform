'use client'

import { modulesService } from '@/services/modules.service'
import { useQuery } from '@tanstack/react-query'

export function useModule() {
	const { data, isLoading, refetch, isError } = useQuery({
		queryKey: ['module'],
		queryFn: () => modulesService.getModules()
	})

	return { data, isLoading, refetch, isError }
}
