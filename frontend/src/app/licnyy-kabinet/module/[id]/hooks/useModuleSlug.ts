'use client'

import { modulesService } from '@/services/modules.service'
import { useQuery } from '@tanstack/react-query'

export function useModuleSlug(id: string) {
	const { data: dataModuleSlug, isLoading: isLoadingModuleSlug, refetch, isError } = useQuery({
		queryKey: ['module-slug', id],
		queryFn: () => modulesService.getModulesSlug(id)
	})

	return { dataModuleSlug, isLoadingModuleSlug, refetch, isError }
}
