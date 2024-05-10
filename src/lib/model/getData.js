import mongoose from "mongoose";

const getDataSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  destination: String,
  about: String,
  details: String,
});

export const GetData =
  mongoose.models.GetData || mongoose.model("GetData", getDataSchema);
