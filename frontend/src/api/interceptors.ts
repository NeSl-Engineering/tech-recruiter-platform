import axios, { type CreateAxiosDefaults } from 'axios'

import { getAccessToken } from '@/services/auth-token.service'

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_PATH,
	headers: {
		'Content-Type': 'application/json',
		Authorization: getAccessToken()
	}
}

const optionsFile: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_PATH,
	headers: {
		'Content-Type': 'multipart/form-data',
		Authorization: getAccessToken()
	}
}
export const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

const axiosClassic = axios.create(options)
const axiosWithFile = axios.create(optionsFile)
const axiosWithAuth = axios.create(options)

// axiosWithAuth.interceptors.response.use(
// 	config => config,
// 	async error => {
// 		const originalRequest = error.config
// 		if (
// 			(error?.response?.status === 401 ||
// 				errorCatch(error) === 'jwt expired' ||
// 				errorCatch(error) === 'jwt must be provided') &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			originalRequest._isRetry = true
// 			try {
// 				await authService.getNewTokens()
// 				return axiosWithAuth.request(originalRequest)
// 			} catch (error) {
// 				if (errorCatch(error) === 'jwt expired') removeFromStorage()
// 			}
// 		}

// 		throw error
// 	}
// )

export { axiosClassic, axiosWithAuth, axiosWithFile }
