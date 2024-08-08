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

export interface ITutor {
	id:	number
	title: string
	full_name:	string
	description:	string
	image: string
}

export interface IModule {
	title: string
	is_demo: boolean
	tutor: ITutor
	ordinal_number: number
	id: number
	course: number
	slug: string
}
