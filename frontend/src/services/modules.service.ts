import { axiosWithAuth } from '@/api/interceptors'
import { IModule } from '@/types/module.types'

class ModulesService {
	private BASE_URL = '/modules'

	async getModules(id: string) {
		const response = await axiosWithAuth.get<IModule[]>(
			`${this.BASE_URL}/?course=${id}`
		)
		return response?.data
	}
}

export const modulesService = new ModulesService()
