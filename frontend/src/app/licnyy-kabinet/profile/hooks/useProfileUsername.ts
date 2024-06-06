'use client'
import { profileService } from '@/services/profile.service'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useProfileUsername(userName?: string) {
	const [debouncedQuery, setDebouncedQuery] = useState(userName)
	const [delay, setDelay] = useState(500)
	const {
		data: dataUsername,
		isLoading: isLoadingUserName,
		refetch,
		isError
	} = useQuery({
		queryKey: ['profile-username', debouncedQuery],
		queryFn: () => profileService.getProfileUserNameParam(debouncedQuery),
		enabled: !!debouncedQuery
	})

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(userName)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [userName, delay])

	return { dataUsername, isLoadingUserName, refetch, isError }
}
