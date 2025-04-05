import { add } from "@repo/math/add";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  return NextResponse.json({
    message: "Hello from Next.js! Added " + add(1, 2),
  });
};
