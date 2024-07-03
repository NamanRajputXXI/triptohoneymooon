// import { getDataFromCollection } from "@/lib/db/mongodb";
// import { NextResponse } from "next/server";

// export async function GET(request) {
//   try {
//     // For now, we'll only fetch data from the 'andaman' collection
//     const data = await getDataFromCollection("andaman");

//     // Transform the data to represent it as states
//     const statesData = {
//       andaman: data,
//     };

//     return NextResponse.json({ data: statesData });
//   } catch (error) {
//     console.error("Failed to fetch states data:", error.message);
//     return NextResponse.json(
//       { error: "Failed to fetch states data" },
//       { status: 500 }
//     );
//   }
// }

import { getDataFromAllCollections } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const data = await getDataFromAllCollections();
    // Assuming each collection represents a state
    const states = Object.keys(data);
    return NextResponse.json({ states });
  } catch (error) {
    console.error("Failed to fetch states:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch states" },
      { status: 500 }
    );
  }
}
