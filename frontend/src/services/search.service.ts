import { axiosWithAuth } from '@/api/interceptors'
import { IModule } from '@/types/module.types'
import { ISearch } from '@/types/search.types'

class SearchService {
	private BASE_URL = '/search'

	async getSearchedData(query: string) {
		const response = await axiosWithAuth.get<ISearch>(
			`${this.BASE_URL}/?query=${query}`
		)
		return response?.data
	}
}

export const searchService = new SearchService()
