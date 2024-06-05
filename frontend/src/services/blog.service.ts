import { IBlog, IBlogTag } from '@/types/types'

import { axiosClassic } from '@/api/interceptors'

class BlogService {
	private BASE_URL = '/posts'

	async getBlog() {
		const response = await axiosClassic.get<IBlog[]>(`${this.BASE_URL}/`)
		return response?.data
	}

	async getBlogId(id: string) {
		const response = await axiosClassic.get<IBlog>(`${this.BASE_URL}/${id}/`)
		return response?.data
	}

	async getBlogTags() {
		const response = await axiosClassic.get<IBlogTag[]>(`/post-tags/`)
		return response?.data
	}
	async getBlogTagsId(id: string) {
		const response = await axiosClassic.get<IBlogTag>(`/post-tags/${id}/`)
		return response?.data
	}
}

export const blogService = new BlogService()
