import { getDataFromCollection } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const activities = await getDataFromCollection("activities");

    // Extract locations from the activities documents
    const locations = activities.map((doc) => doc.location).filter(Boolean);

    return NextResponse.json({ locations });
  } catch (error) {
    console.error("Failed to fetch activities:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch activities" },
      { status: 500 }
    );
  }
}
