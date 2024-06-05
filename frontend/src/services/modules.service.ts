import { axiosWithAuth } from '@/api/interceptors'
import { IModule } from '@/types/module.types'

class ModulesService {
	private BASE_URL = '/modules'

	async getModulesId(id: string) {
		const response = await axiosWithAuth.get<IModule[]>(
			`${this.BASE_URL}/?course__slug=${id}`
		)
		return response?.data
	}

	async getModulesSlug(id: string) {
		const response = await axiosWithAuth.get<IModule>(`${this.BASE_URL}/${id}/`)
		return response?.data
	}
}

export const modulesService = new ModulesService()
