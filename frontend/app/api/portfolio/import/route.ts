import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { parseGoldSheet } from "@/services/portfolioParser";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: "No file uploaded.",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const workbook = XLSX.read(buffer, {
      type: "buffer",
    });

    const goldSheet = workbook.Sheets["Gold"];

    const gold = parseGoldSheet(goldSheet);

    return NextResponse.json({
     success: true,
     gold,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to read Gold sheet.",
      },
      { status: 500 }
    );
  }
}