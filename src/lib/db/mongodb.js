import { MongoClient } from "mongodb";

// const uri = "mongodb://localhost:27017/triptohoneymoon";
const uri =
  "mongodb+srv://NamaRajput:P617DS3Zg7lZv5Um@cluster0.acxxk7e.mongodb.net/triptohoneymoon?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const connectToMongo = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

const closeMongoConnection = async () => {
  try {
    await client.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    throw error;
  }
};

export async function getDataFromAllCollections() {
  let data = {};

  try {
    await connectToMongo();
    const db = client.db();
    const collections = await db.listCollections().toArray();

    const collectionDataPromises = collections.map(async (collection) => {
      const collectionName = collection.name;
      const collectionData = await db
        .collection(collectionName)
        .find()
        .toArray();
      data[collectionName] = collectionData;
    });

    await Promise.all(collectionDataPromises);
  } catch (error) {
    console.error("Error fetching data from all collections:", error);
    throw error;
  } finally {
    await closeMongoConnection();
  }

  return data;
}

export async function getDataFromCollection(collectionName) {
  try {
    await connectToMongo();
    const db = client.db();
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  } finally {
    await closeMongoConnection();
  }
}
