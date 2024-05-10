// import { GetData } from "@/lib/model/getData";
// import { connectionStr } from "@/lib/mongodb";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await mongoose.connect(connectionStr);
//     const data = await GetData.find({});
//     console.log(data);
//     await mongoose.disconnect();
//     return NextResponse.json({ data: data });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch data" },
//       { status: 500 }
//     );
//   }
// }

import { MongoClient } from "mongodb";
import { connectionStr } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = new MongoClient(connectionStr);

    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Get the database and collection references
    const db = client.db();
    const collection = db.collection("packages");

    // Fetch data from the "packages" collection
    const data = await collection.find({}).toArray();
    console.log("Data:", data);

    await client.close();

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
