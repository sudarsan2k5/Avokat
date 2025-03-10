import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === '/login' || 
                       path === '/forgot-password' || 
                       path === '/' || 
                       path.startsWith('/api/');

  // Check if user is authenticated by looking for the user item in localStorage
  // Note: This is a client-side check, so we can't do this in middleware
  // Instead, we'll handle this in the component itself
  
  // For now, we'll just allow all requests
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