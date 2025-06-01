import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    return NextResponse.json({
        status: 'success',
        message: 'Hello from Stripe API',
    });
};