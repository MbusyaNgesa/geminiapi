import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "What are the ingredients for ugali";

const prompt = `List two popular biriani recipes using this JSON schema:

Recipe = {'recipeName': string}
Ingredients = {'recipeIngredients': string}
Instructions = {'recipeInstructions': string}
Return: Array<Recipe>
Return: Array<Ingredients>
Return: <Instructions>`;

const result = await model.generateContent(prompt);
console.log(result.response.text());
