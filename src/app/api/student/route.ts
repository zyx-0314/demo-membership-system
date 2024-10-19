import Ticket from "@/models/ticket"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message } = body
    await Ticket.create({
      message
    })

    return NextResponse.json(
      { message: `Successfully Add Student ${message}` },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Student: ", error },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Connection Check", },
    { status: 200 }
  )
}