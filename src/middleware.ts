import { NextResponse, NextRequest } from "next/server";
import {
  checkCartAndRedirect,
  checkCategoryAndRedirect,
} from "./utils/middleware-utils";

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  if (pathName === "/checkout") return await checkCartAndRedirect(request);

  if (pathName.startsWith("/category/"))
    return await checkCategoryAndRedirect(request);

  return NextResponse.next();
}
