import { IProfile } from '@/types/types'

import { axiosWithAuth } from '@/api/interceptors'

class ProfileService {
	private BASE_URL = '/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<IProfile>(`${this.BASE_URL}/`)
		return response?.data
	}

	async putProfile(data: IProfile): Promise<IProfile> {
		const response = await axiosWithAuth.patch(`${this.BASE_URL}/`, data)
		return response?.data.data
	}
}

export const profileService = new ProfileService()
