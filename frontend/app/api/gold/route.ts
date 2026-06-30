import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.auragold.in/api/data/v1/prices?product=24KGOLD",
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch gold price",
      },
      {
        status: 500,
      }
    );
  }
}