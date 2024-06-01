const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://athithyaramaa:athithya1@feasthub.u1werkv.mongodb.net/FeastHubMERN?retryWrites=true&w=majority&appName=FeastHub";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
    const dbData = await mongoose.connection.db.collection("food_items");
    // console.log(dbData)
    const data = await dbData.find({}).toArray();
    // console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDatabase;
