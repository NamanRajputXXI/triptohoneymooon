export const connectionStr = "mongodb://localhost:27017/triptohoneymoon";
import { MongoClient } from "mongodb";

export async function getDataFromCollection(collectionName) {
  try {
    const client = new MongoClient(connectionStr);
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db();
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();

    await client.close();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
