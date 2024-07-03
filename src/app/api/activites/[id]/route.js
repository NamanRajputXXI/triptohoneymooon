// }

import { getDataFromCollection } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  console.log("Requested ID:", id);

  try {
    console.log("Fetching activity from database...");
    const activities = await getDataFromCollection("activities");

    if (!Array.isArray(activities) || activities.length === 0) {
      console.log("No activities found in the database");
      return NextResponse.json(
        { error: "No activities found" },
        { status: 404 }
      );
    }

    console.log(`Searching for activity with ID: ${id}`);
    const activity = activities.find((doc) => doc._id.toString() === id);

    if (!activity) {
      console.log(`No activity found for ID: ${id}`);
      return NextResponse.json(
        { error: `No activity found for ID: ${id}` },
        { status: 404 }
      );
    }

    console.log(`Found activity for ID: ${id}`);
    return NextResponse.json({ data: activity });
  } catch (error) {
    console.error("Failed to fetch activity:", error);
    return NextResponse.json(
      { error: "Failed to fetch activity", details: error.message },
      { status: 500 }
    );
  }
}
