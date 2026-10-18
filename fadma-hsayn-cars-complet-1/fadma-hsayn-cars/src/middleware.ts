import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales, isLocale } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static / next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  const first = pathname.split("/").filter(Boolean)[0];

  // Already has locale prefix (en, ar, es)
  if (first && isLocale(first) && first !== defaultLocale) {
    const res = NextResponse.next();
    res.headers.set("x-locale", first);
    return res;
  }

  // French (default) — no prefix
  const res = NextResponse.next();
  res.headers.set("x-locale", defaultLocale);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|.*\\..*).*)"],
};
