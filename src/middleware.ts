import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const i18n = {
  defaultLocale: "es",
  locales: ["es", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language");
  if (!acceptLang) return i18n.defaultLocale;

  if (acceptLang.includes("es")) return "es";
  if (acceptLang.includes("en")) return "en";
  
  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|Img|favicon).*)"],
};
