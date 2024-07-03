// import { getDataFromAllCollections } from "@/lib/db/mongodb";
// import { NextResponse } from "next/server";

// export async function GET(request) {
//   try {
//     const data = await getDataFromAllCollections();
//     // Assuming each collection represents a state
//     const states = Object.keys(data);

//     // Ensure 'kashmir' is included in the states list
//     if (!states.includes("kashmir")) {
//       states.push("kashmir");
//     }

//     return NextResponse.json({ states });
//   } catch (error) {
//     console.error("Failed to fetch states:", error.message);
//     return NextResponse.json(
//       { error: "Failed to fetch states" },
//       { status: 500 }
//     );
//   }
// }

import { getDataFromAllCollections } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const data = await getDataFromAllCollections();
    // Get states from the database
    const dbStates = Object.keys(data);

    // Define the states we want to ensure are included
    const requiredStates = ["andaman", "kashmir"];

    // Combine database states with required states, removing duplicates
    const states = [...new Set([...dbStates, ...requiredStates])];

    return NextResponse.json({ states });
  } catch (error) {
    console.error("Failed to fetch states:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch states" },
      { status: 500 }
    );
  }
}
