import { profileService } from '@/services/profile.service'
import { useQuery } from '@tanstack/react-query'

export function useProfile() {
	const { data, isLoading, refetch, isError } = useQuery({
		queryKey: ['profile'],
		queryFn: () => profileService.getProfile()
	})

	return { data, isLoading, refetch, isError }
}
