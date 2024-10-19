import { NextRequest, NextResponse } from "next/server"

import prismaDB from "@/lib/prismaDB"

export async function GET() {
  console.log("Get Test")

  return NextResponse.json(
    { message: "Check!" }, { status: 200 }
  )
}

export async function POST(request: NextRequest) {
  console.log("Post Test")

  const body = await request.json()
  const { f_name, number } = body

  if (!f_name) return NextResponse.json({ error: "First Name Required" }, { status: 400 })

  if (!number) return NextResponse.json({ error: "Number Required" }, { status: 400 })

  await prismaDB.customer.create({
    data: {
      f_name,
      number
    }
  })

  return NextResponse.json(
    { message: "Added new customer: ", f_name },
    { status: 201 }
  )


}