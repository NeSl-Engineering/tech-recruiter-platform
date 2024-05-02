import { IAuthLogin, IAuthRegister, IAuthResponse, IEmailVerify } from '@/types/auth.types'

import { axiosClassic, axiosWithAuth, axiosWithFile } from '@/api/interceptors'

import { saveTokenStorage } from './auth-token.service'

class AuthService {
	private BASE_URL = '/auth'

	async register(data: IAuthRegister): Promise<IAuthRegister> {
		const response = await axiosWithFile.post(
			`${this.BASE_URL}/register/`,
			data
		)

		return response?.data.data
	}

	async verifyEmail(data: IEmailVerify): Promise<IEmailVerify> {
		const response = await axiosClassic.post(
			`${this.BASE_URL}/verify-email/`,
			data
		)

		return response?.data.data
	}

	async login(): Promise<IAuthLogin> {
		const response = await axiosWithAuth.get(`${this.BASE_URL}/login`)
		return response?.data.data
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this.BASE_URL}/token/refresh`
		)

		if (response.data.data.refresh) saveTokenStorage(response.data.data.refresh)

		return response
	}
}

export const authService = new AuthService()
