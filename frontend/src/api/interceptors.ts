import axios, { type CreateAxiosDefaults } from 'axios'

import {
	getAccessToken,
	removeFromStorage
} from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'
import { errorCatch } from './error'

const options: CreateAxiosDefaults = {
	baseURL: 'http://10.192.5.65:1234/api/v2',
	// baseURL: 'http://216.250.12.77/api/v2',
	headers: {
		'Content-Type': 'application/json',
		Authorization: getAccessToken()
	}
}

const optionsFile: CreateAxiosDefaults = {
	baseURL: 'http://10.192.5.65:1234/api/v2',
	headers: {
		'Content-Type': 'multipart/form-data',
		Authorization: getAccessToken()
	}
}

const axiosClassic = axios.create(options)
const axiosWithFile = axios.create(optionsFile)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth, axiosWithFile }
