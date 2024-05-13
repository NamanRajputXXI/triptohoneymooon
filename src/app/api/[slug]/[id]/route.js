import { getDataFromCollection } from "@/lib/db/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug, id } = params;
  console.log("Slug:", slug);
  console.log("ID:", id);

  try {
    const data = await getDataFromCollection(slug);

    // Find the document with a matching _id
    const document = data.find((doc) => doc._id.toString() === id);

    if (!document) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ document });
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
