import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const port = process.env.PORT || 5000;

app.post("/recipe", async (req, res) => {
  try {
    const { ingredients, cookingTime, cuisine, diet, complexity } = req.body;
    // pormpt
    const prompt = `
You are a professional chef. Generate a recipe in Markdown format with the following rules:

1. All section headings must be written as Markdown headings using hashes (for example:  Recipe Name,  Ingredients, etc.).
2. Include these sections in this order (each as a hash-heading):
   -  Recipe Name
   -  Cooking Time
   -  Cuisine
   -  Diet Preference
   -  Complexity Level
   -  Serving Size
   -  Ingredients (use bullet points)
   -  Step-by-Step Instructions (numbered list, include bold for subheadings inside steps if needed)
   -  Estimated Calories
   -  Nutritional Information (per serving)
   -  Note
3. Use clear, concise, and easy-to-follow instructions.
4. Make sure the output is neat Markdown so it can be displayed directly in your frontend.

User Inputs:
- Ingredients: ${ingredients}
- Cooking Time: ${cookingTime} minutes
- Cuisine: ${cuisine}
- Diet Preference: ${diet}
- Complexity Level: ${complexity}
`;


    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    res.json({ response: responseText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
