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
	is_seen: boolean
	is_open: boolean
	videos: IModuleVideo[]
	materials: IModuleMaterial[]
}
