import express from "express";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import Post from "../mongodb/models/post.js";


dotenv.config();
const postRoutes = express.Router();

postRoutes.get("/", (req, res) => {
    return res.send("This is is Post Routes");
})

export default postRoutes;