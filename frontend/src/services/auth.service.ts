import {
	IAuthLogin,
	IAuthRegister,
	IAuthResponse,
	IEmailVerify,
	IResendOtp
} from '@/types/auth.types'

import { axiosClassic, axiosWithFile } from '@/api/interceptors'

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

	async login(data: IAuthLogin): Promise<IAuthLogin> {
		const response = await axiosClassic.post(`${this.BASE_URL}/token/`, data)
		if (response.data.access) saveTokenStorage(response.data.access)

		return response.data
	}

	async resendOtp(data: IResendOtp): Promise<IResendOtp> {
		const response = await axiosClassic.post(
			`${this.BASE_URL}/resend-otp/`,
			data
		)

		return response?.data.data
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this.BASE_URL}/token/refresh`
		)

		if (response.data.refresh) saveTokenStorage(response.data.refresh)

		return response
	}
}

export const authService = new AuthService()
