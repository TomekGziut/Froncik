const express = require("express");
const { OpenAI } = require("openai");
const cors = require("cors");

const app = express(); // Utwórz instancję aplikacji Express
const port = 5000;

const baseURL = "https://api.aimlapi.com/v1";
const apiKey = "13996f61baa64505b25f4e0dfd8313a0";

const api = new OpenAI({
  apiKey,
  baseURL,
});

app.use(cors()); // Teraz możesz użyć cors
app.use(express.json());

app.post("/api/ask", async (req, res) => {
  const { userPrompt } = req.body;

  if (!userPrompt) {
    return res.status(400).json({ error: "User prompt is required" });
  }

  try {
    const completion = await api.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "you answer questions, you give only the answer, no explanation" },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 256,
    });

    const response = completion.choices[0].message.content;
    res.json({ response });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch response from OpenAI" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});