import  {GoogleGenerativeAI}  from "@google/generative-ai"


 
// console.log();

const genAI = new GoogleGenerativeAI("AIzaSyDa7Y11JEGMx5wglXxrUJrT_FKwmOwNJcw");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
const strreamdata = await model.generateContentStream(prompt);

console.log(result.response.text());
