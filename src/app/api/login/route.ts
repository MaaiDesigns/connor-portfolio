import { NextResponse, type NextRequest } from "next/server";

import {
  AUTH_COOKIE,
  AUTH_MAX_AGE,
  AUTH_TOKEN,
  SITE_PASSWORD,
} from "@/lib/auth";

function isSafeRedirect(target: string | null): target is string {
  return !!target && target.startsWith("/") && !target.startsWith("//");
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const fromRaw = form.get("from");
  const from = isSafeRedirect(typeof fromRaw === "string" ? fromRaw : null)
    ? (fromRaw as string)
    : "/";

  const origin = req.nextUrl.origin;

  if (password !== SITE_PASSWORD) {
    const url = new URL("/login", origin);
    url.searchParams.set("error", "1");
    if (from !== "/") url.searchParams.set("from", from);
    return NextResponse.redirect(url, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(from, origin), { status: 303 });
  response.cookies.set({
    name: AUTH_COOKIE,
    value: AUTH_TOKEN,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_MAX_AGE,
  });
  return response;
}
