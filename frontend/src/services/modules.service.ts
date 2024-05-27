import { axiosWithAuth } from '@/api/interceptors'
import { IModule } from '@/types/module.types'

class ModulesService {
	private BASE_URL = '/modules'

	async getModules() {
		const response = await axiosWithAuth.get<IModule[]>(`${this.BASE_URL}/`)
		return response?.data
	}
}

export const modulesService = new ModulesService()
