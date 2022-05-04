import { MongoClient } from "mongodb";

async function connect() {
  MongoClient.connect(process.env.MONGO_URL)
    .then((client: any) => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB: ", err);
    });
}
export default connect;
