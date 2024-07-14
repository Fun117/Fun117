// website/src/middleware.ts

import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "@/components/provider/nav";

import richtplConfig from "../richtpl.config";
import { NextRequest, NextResponse } from "next/server";

// 既存のミドルウェアを作成
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  pathnames,
  // Used when no locale matches
  defaultLocale: richtplConfig.i18n.defaultLocale,
});

export function middleware(request: NextRequest) {
  // Add a new header x-current-path which passes the path to downstream components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  // console.log(requestHeaders);

  const response = NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });

  // // ヘッダー情報をログに出力
  // const headersList = request.headers;
  // console.log("\n\n ");
  // headersList.forEach((value, key) => {
  //   console.log(`${key}: ${value}`);
  // });
  // console.log("\n\n ");

  // 既存のintlミドルウェアを呼び出す
  return intlMiddleware(request) || response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(ja|en)/:path*`],
};
