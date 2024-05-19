export interface IAuthLogin {
	email: string
	password: string
}

export interface IConfirmPassword {
	password: string
	confirmPassword?: string
	token: string
}

export interface IResendOtp {
	email: string
}

export interface IValidateToken {
	token: string
}

export interface IAuthRegister {
	username: string
	email: string
	password: string
	confirmPassword?: string
	first_name: string
	last_name: string
	profile_photo: string
	telegram_nickname: string
	birth_date: string
	day?: string
	month?: string
	year?: string
}

export interface IEmailVerify {
	email: string
	otp: string
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
	access: string
	refresh: string
}

export interface IProfile {
	first_name: string
	last_name: string
	username: string
	password: string
	telegram_nickname?: string
	email?: string
	profile_photo: string
}

export interface ICourse {
	id?: number
	title: string
	price: string
	start_time: string
	end_time: string
	is_infinite: boolean
	cover_image: string
	category: number
}

export interface ICourses {
	id?: number
	title: string
	courses?: ICourse[]
}

export interface IChangePassword {
	old_password: string
	password: string
	confirmPassword: string
}