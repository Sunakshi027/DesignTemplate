import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Contactus } from "@/controller/authController";

export async function POST(request) {
  try {
    await connectDB();

    const data = await request.json();

    const query = await Contactus(data);

    return NextResponse.json(
      {
        success: true,
        message: "Your query has been submitted successfully",
        data: query,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    );
  }
}