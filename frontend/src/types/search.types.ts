import { IModule } from './module.types'
import { IPost } from './post.types'
import { ICourse } from './types'

export interface ISearch {
	posts: IPost[]
	courses: ICourse[]
	modules: IModule[]
}
