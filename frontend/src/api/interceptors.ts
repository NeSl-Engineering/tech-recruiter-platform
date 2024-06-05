import axios, { type CreateAxiosDefaults } from 'axios'

import { getAccessToken } from '@/services/auth-token.service'

const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:8000/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: getAccessToken()
	}
}

const optionsFile: CreateAxiosDefaults = {
	baseURL: 'http://localhost:8000/api',
	headers: {
		'Content-Type': 'multipart/form-data',
		Authorization: getAccessToken()
	}
}
export const BASE_IMAGE_URL = 'http://localhost:9000/tech-recruiter/media'

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
