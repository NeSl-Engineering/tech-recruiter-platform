export interface IAuthLogin {
	email: string
	password: string
}

export interface IResendOtp {
	email: string
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


