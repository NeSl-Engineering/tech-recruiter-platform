import { IConfirmPassword, IResendOtp, IValidateToken } from '@/types/types'

import { axiosClassic } from '@/api/interceptors'

class ForgotPasswordService {
	private BASE_URL = '/auth/password_reset'

	async passwordReset(data: IResendOtp): Promise<IResendOtp> {
		const response = await axiosClassic.post(`${this.BASE_URL}/`, data)

		return response?.data.data
	}

	async postToken(data: IValidateToken): Promise<IValidateToken> {
		const response = await axiosClassic.post(
			`${this.BASE_URL}/validate_token/`,
			data
		)

		return response?.data.data
	}

	async postConfirmPassword(data: IConfirmPassword): Promise<IConfirmPassword> {
		const response = await axiosClassic.post(
			`${this.BASE_URL}/confirm/`,
			data
		)

		return response?.data.data
	}
}

export const forgotPasswordService = new ForgotPasswordService()
