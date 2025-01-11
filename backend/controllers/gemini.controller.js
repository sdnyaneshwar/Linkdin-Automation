import  {GoogleGenerativeAI}  from "@google/generative-ai"


const callgemini = async () => {

    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Explain how AI works";
    
    const result = await model.generateContent(prompt);
    const strreamdata = await model.generateContentStream(prompt);
    console.log(result.response.text());
    
    return result.response.text();
}

export {callgemini}