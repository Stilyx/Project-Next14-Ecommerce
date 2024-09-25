import { getCategory, getProduct } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export async function checkCartAndRedirect(request: NextRequest) {
  const cart = request.cookies.get("cart")?.value || "";

  if (!JSON.parse(cart || "[]").length) {
    const redirectUrl = new URL("/", request.url);
    return NextResponse.redirect(redirectUrl);
  }
}

export async function checkCategoryAndRedirect(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const categoryName = pathName.split("/")[2];
  const productName = pathName.split("/")[3];
  const category = await getCategory(categoryName);

  if (category.length === 0) {
    const redirectUrl = new URL("/404", request.url);
    return NextResponse.redirect(redirectUrl);
  }

  if (!productName) return;
  const product = await getProduct(productName);

  if (product.length === 0) {
    const redirectUrl = new URL("/404", request.url);
    return NextResponse.redirect(redirectUrl);
  }
}
