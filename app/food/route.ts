import {NextRequest, NextResponse} from "next/server";
import {foodBank} from "@/app/food";

export async function GET(request: NextRequest) {
    return new NextResponse(JSON.stringify(foodBank));
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    foodBank.push(data);
    return new NextResponse(JSON.stringify(foodBank));
}
