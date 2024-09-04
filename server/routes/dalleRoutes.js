import express from "express";
import cloudinary from "cloudinary";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";
const dalleRoutes = express.Router();

dotenv.config();

const openai = new OpenAI({
  apikey: process.env.OPENAI_API_KEY,
  organization: process.env.ORGANIZATION_ID,
  project: process.env.PROJECT_ID,
});

// ROUTES

dalleRoutes.route("/").post(async (req, res) => {
  const { prompt } = req.body;

  try {
    const aiResponse = await openai.images.generate({
      prompt: prompt,
      model: "dall-e-3",
      style: "vivid",
      quality: "standard",
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    return res.status(200).send({ data: aiResponse });
    // const image = aiResponse.data.data[0].b64_json;
    // return res.status(200).send({ photo: image });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Internal server error",
      apikey: process.env.OPENAI_API_KEY,
      error: error,
    });
  }
});

export default dalleRoutes;
