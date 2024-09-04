import { set, connect } from "mongoose";

const connectDB = (url) => {
  set("strictQuery", true);
  connect(url)
    .then(() => console.log("MongoDB is connected!"))
    .catch((error) => console.error(error));
};

export default connectDB;