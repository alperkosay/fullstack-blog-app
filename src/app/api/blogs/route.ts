import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { Blog } from "@prisma/client";


export async function GET(request: NextRequest) {
    try {
        const data = await prisma.blog.findMany();
        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        return NextResponse.json(error, { status: 404 })
    }
}


export async function POST(request: NextRequest) {
    const body: Blog = await request.json();

    try {
        const data = await prisma.blog.create({
            data: body
        });

        return NextResponse.json({ message: "created", data });
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 400 });

    }
}

