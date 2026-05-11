import { NextResponse, type NextRequest } from "next/server";

import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";

const PUBLIC_PATHS = ["/login", "/api/login"];
const PUBLIC_FILES = new Set(["/icon.png", "/favicon.ico", "/robots.txt"]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    PUBLIC_FILES.has(pathname) ||
    PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))
  ) {
    return NextResponse.next();
  }

  if (req.cookies.get(AUTH_COOKIE)?.value === AUTH_TOKEN) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  url.searchParams.set("from", pathname + (req.nextUrl.search || ""));
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
