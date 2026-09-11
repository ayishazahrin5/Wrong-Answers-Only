import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Serve index.html and other files
app.use(express.static(__dirname));


// ================= GROQ =================

app.post("/api/wrong-answer", async (req, res) => {

    try {

        const { question } = req.body;

        if (!question || !question.trim()) {

            return res.status(400).json({
                error: "Please provide a question."
            });

        }

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization":
                        `Bearer ${process.env.GROQ_API_KEY}`
                },

                body: JSON.stringify({

                    model: "openai/gpt-oss-20b",

                    messages: [

                        {
                            role: "system",

                            content: `
You are playing a ridiculous game called "Wrong Answers Only".

The user asks a normal factual question.

Give an answer that is:
- completely wrong
- absurd
- hilarious
- confident
- short
- related to the question

NEVER give the real answer.

Do not explain.
Do not apologize.
Do not say "actually".
Do not add disclaimers.

Give ONLY the confidently wrong answer.

Examples:

Question: What do cows drink?
Answer: Cows drink WiFi.

Question: What is the capital of France?
Answer: The capital of France is a suspicious toaster.

Question: Why is the sky blue?
Answer: Because the sky forgot how to be orange.
`
                        },

                        {
                            role: "user",
                            content: question.trim()
                        }

                    ],

                    temperature: 1.2,
max_completion_tokens: 200,
reasoning_effort: "low",
include_reasoning: false
                })
            }
        );


        // Get Groq response
        const data = await response.json();

        console.log(
            "GROQ RESPONSE:",
            JSON.stringify(data, null, 2)
        );


        // Handle API errors
        if (!response.ok) {

            console.error("Groq error:", data);

            return res.status(response.status).json({
                error:
                    data.error?.message ||
                    "Groq request failed."
            });

        }


        // Get AI answer
        const answer =
            data.choices?.[0]?.message?.content?.trim();


        // Make sure an answer exists
        if (!answer) {

            console.error(
                "NO ANSWER FOUND:",
                data
            );

            return res.status(500).json({
                error:
                    "Groq returned no usable answer. Check terminal."
            });

        }


        // Send answer to frontend
        res.json({
            answer
        });


    } catch (error) {

        console.error(
            "Server error:",
            error
        );

        res.status(500).json({
            error:
                "Something exploded. Probably the AI."
        });

    }

});


// ================= HOME =================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});


// ================= START =================

app.listen(PORT, () => {

    console.log(
        `Wrong Answers Only running at http://localhost:${PORT}`
    );

});