import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware() {
  // For now, we'll just allow all requests
  // We'll handle authentication in the components
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 