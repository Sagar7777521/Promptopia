import mongoose from "mongoose";


let isConnected = false;

export const connectTodb = async () => mongoose.set("strictQuery", true);
if (isConnected) {
  console.log("MongoSB is already Connected");
  return;
}
try {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "share_prompt",
    useNewURLParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
} catch (error) {
  console.log(error);
}
