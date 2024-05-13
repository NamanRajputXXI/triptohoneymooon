import { getDataFromCollection } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;
  console.log("Slug:", slug);
  try {
    const data = await getDataFromCollection(slug);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
