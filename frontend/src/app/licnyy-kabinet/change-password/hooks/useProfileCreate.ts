import { profileService } from '@/services/profile.service'
import { IChangePassword } from '@/types/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function usePutProfile() {
	const queryClient = useQueryClient()

	const { mutate: putProfile, isSuccess } = useMutation({
		mutationKey: ['profile'],
		mutationFn: (data: IChangePassword) => profileService.putProfile(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
		},
		onError() {
			toast.error('Ошибка!')
		}
	})

	return { putProfile, isSuccess }
}
