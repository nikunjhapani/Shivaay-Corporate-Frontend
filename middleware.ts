import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
        return new NextResponse(null, { status: 204 })
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/.well-known/:path*'],
}
