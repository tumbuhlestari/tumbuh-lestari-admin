import { auth } from '@/auth';

import {
  authRoutes,
  apiAuthPrefix,
  apiProductRoute,
  apiPostRoute,
} from '@/routes';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isApiProductRoute = nextUrl.pathname.startsWith(apiProductRoute);
  const isApiPostRoute = nextUrl.pathname.startsWith(apiPostRoute);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/dashboard', nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isApiProductRoute && !isApiPostRoute) {
    return Response.redirect(new URL('/auth/login', nextUrl));
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
