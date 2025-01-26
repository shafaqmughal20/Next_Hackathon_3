import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Disable draft mode
  if (req.nextUrl.pathname.includes("_next/data")) {
    req.headers.delete("x-vercel-draft-mode");
  }
  return NextResponse.next();
}
