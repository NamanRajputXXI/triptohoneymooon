import { getDataFromCollection } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

// Import this from a shared config file
const requiredStates = ["andaman", "kashmir"];

export async function GET(request, { params }) {
  const { stateName } = params;
  console.log("State Name:", stateName);

  try {
    // Convert stateName to lowercase for case-insensitive matching
    const collectionName = stateName.toLowerCase();

    // Check if the state is in the required states list
    if (!requiredStates.includes(collectionName)) {
      return NextResponse.json({ error: "Invalid state" }, { status: 404 });
    }

    const data = await getDataFromCollection(collectionName);

    if (data.length === 0) {
      return NextResponse.json(
        { error: "No data found for this state" },
        { status: 404 }
      );
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
