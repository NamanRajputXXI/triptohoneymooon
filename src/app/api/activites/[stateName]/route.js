import { getDataFromCollection } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { stateName } = params;
  console.log("State Name:", stateName);

  try {
    const activities = await getDataFromCollection("activities");
    console.log("All activities:", JSON.stringify(activities, null, 2));

    // Find the activity document for the specific location
    const stateActivities = activities.find((doc) => {
      console.log(
        `Comparing ${doc.location.toLowerCase()} with ${stateName.toLowerCase()}`
      );
      return doc.location.toLowerCase() === stateName.toLowerCase();
    });

    console.log("State Activities:", stateActivities);

    if (!stateActivities) {
      return NextResponse.json(
        { error: "No activities found for this location" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: stateActivities.activities });
  } catch (error) {
    console.error("Failed to fetch location activities:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch location activities" },
      { status: 500 }
    );
  }
}
