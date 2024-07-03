import { getDataFromCollection } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { stateName } = params;
  console.log("State Name:", stateName);

  try {
    // Convert stateName to lowercase for case-insensitive matching
    const collectionName = stateName.toLowerCase();
    const data = await getDataFromCollection(collectionName);

    if (data.length === 0) {
      return NextResponse.json({ error: "State not found" }, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Failed to fetch state data:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch state data" },
      { status: 500 }
    );
  }
}
