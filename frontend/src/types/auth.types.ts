export interface IAuthLogin {
	email: string
	password: string
}

export interface IAuthRegister {
	username: string
	email: string
	password: string
	first_name: string
	last_name: string
	profile_photo: string
	telegram_nickname: string
	birthDate: string
}

export interface IUser {
	id: number
	name?: string
	email: string
	workInterval?: number
	breakInterval?: number
	intervalsCount?: number
}

export interface IAuthResponse {
	data: {
		access: string
		refresh: string
	}
}


