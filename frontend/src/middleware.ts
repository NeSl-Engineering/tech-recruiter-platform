import { NextRequest, NextResponse } from 'next/server'

// import { LK_PAGES } from './config/lk-pages-url.config'
// import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	// const { url, cookies } = request

	// const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	// const isAuthPage = url.includes('/login')

	// if (isAuthPage && refreshToken) {
	// 	return NextResponse.redirect(new URL(LK_PAGES.HOME, url))
	// }

	// if (isAuthPage) {
	// 	return NextResponse.next()
	// }

	// if (!refreshToken) {
	// 	return NextResponse.redirect(new URL('/login', request.url))
	// }

	// return NextResponse.next()
}

export const config = {
	matcher: ['/licnyy-kabinet/:path*', '/login/:path']
}
