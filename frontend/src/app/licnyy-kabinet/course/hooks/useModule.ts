'use client'

import { modulesService } from '@/services/modules.service'
import { useQuery } from '@tanstack/react-query'

export function useModule(moduleId: string) {
	const { data, isLoading, refetch, isError } = useQuery({
		queryKey: ['module', moduleId],
		queryFn: () => modulesService.getModulesId(moduleId)
	})

	return { data, isLoading, refetch, isError }
}
