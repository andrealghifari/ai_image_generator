import express, { json, urlencoded } from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import router from "./routes/index.js";
config();

const app = express();
app.use(cors());
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
app.use("/api", router);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from Dall-E 2.0");
});
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server is running on http://localhost:8080");
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
