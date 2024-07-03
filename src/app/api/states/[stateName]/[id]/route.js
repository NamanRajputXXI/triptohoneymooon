import { getDataFromCollection } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { stateName, id } = params;
  console.log("State Name:", stateName);
  console.log("ID:", id);

  try {
    const collectionName = stateName.toLowerCase();
    const data = await getDataFromCollection(collectionName);

    const document = data.find((doc) => doc._id.toString() === id);

    if (!document) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ document });
  } catch (error) {
    console.error("Failed to fetch document:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch document" },
      { status: 500 }
    );
  }
}
