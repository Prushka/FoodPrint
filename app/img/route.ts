
import { NextResponse, NextRequest } from "next/server";
import {classifyImage} from "@/app/img/img";

export const runtime = "edge";

export async function POST(request: NextRequest) {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
        return NextResponse.json(
            { message: "File not present in body" },
            { status: 400, statusText: "Bad Request" }
        );
    }
    const response = await classifyImage(file);

    return NextResponse.json(response);
}
