import { profileService } from '@/services/profile.service'
import { IProfile } from '@/types/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function usePutProfile() {
	const queryClient = useQueryClient()

	const { mutate: putProfile, isSuccess } = useMutation({
		mutationKey: ['profile'],
		mutationFn: (data: IProfile) => profileService.putProfile(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
		}
	})

	return { putProfile, isSuccess }
}
