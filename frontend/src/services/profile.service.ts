import { IChangePassword, IProfile } from '@/types/types'

import { axiosWithAuth } from '@/api/interceptors'

class ProfileService {
	private BASE_URL = '/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<IProfile>(`${this.BASE_URL}/`)
		return response?.data
	}

	async putProfile(data: IChangePassword): Promise<IChangePassword> {
		const response = await axiosWithAuth.post(`/users/update-password/`, data)
		return response?.data.data
	}

	async getProfileUserNameParam(userName?: string) {
		const response = await axiosWithAuth.get<any>(
			`/users/username-valid/?username=${userName}`
		)
		return response?.data
	}
}

export const profileService = new ProfileService()
