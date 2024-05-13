import { getDataFromAllCollections } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const data = await getDataFromAllCollections();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
