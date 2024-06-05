export interface IModuleVideo {
	id: number
	file: string
	ordinal_number: number
	length: number
}

export interface IModuleMaterial {
	id: number
	file: string
	ordinal_number: number
}

export interface IModule {
	title: string
	is_demo: boolean
	ordinal_number: number
	id: number
	course: number
	slug: string
}
