
Wrong Answers Only! 🎯<br>
Basic Details
Team Name: ZenX <br><br>
Team Members<br>
Member 1: Ayisha Zahrin - Government Engineering College Kozhikode<br>
Member 2: Sara Ajeeba - Government Engineering College Kozhikode<br><br>
Project Description:<br>
🤪 Wrong Answers Only

Welcome to the game where being wrong is the whole point! 🎯😂

Think you know the answer? Prove yourself wrong!
Players are challenged with fun questions and must give the most creative, ridiculous, and hilariously incorrect answers they can think of.

🚫 Correct answers? NOPE!
✅ Wrong answers? ABSOLUTELY!
🏆 Funniest answer? YOU WIN!

A simple, chaotic, and entertaining game designed to turn ordinary questions into maximum nonsense and maximum fun! 😂🔥<br><br>

The Problem (that doesn't exist)<br>
People have been answering questions correctly for far too long. This has caused an alarming shortage of confidently wrong answers, unnecessary knowledge, and absolutely avoidable pillow attacks.<br><br>

The Solution (that nobody asked for)<br>
Wrong Answers Only is a game where being wrong is the only way to win. Answer questions incorrectly, survive the timer, and use your voice to prove that you have absolutely no idea what you're talking about. And if you let the AI play, it will confidently make things up for you.<br><br>

Technical Details<br>
Technologies/Components Used<br>
For Software:<br>

Languages used<br>

HTML<br>
CSS<br>
JavaScript<br><br>

Frameworks used<br>
Node.js<br>
Express.js<br><br>

Libraries used<br>
dotenv<br>
Web Speech API<br>
Web Audio API<br><br>

Tools used<br>
VS Code<br>
Git & GitHub<br>
Groq API<br>
Browser Developer Tools<br><br>

For Hardware:<br>

Main components<br>

Laptop/PC<br>
Microphone<br>
Speakers/Headphones<br>

Specifications<br>

Any modern laptop/PC capable of running Node.js and a modern web browser<br>
Working microphone for voice input<br>
Internet connection for AI-generated answers<br><br>

Tools required<br>

VS Code<br>
Node.js<br>
Modern web browser<br>
Implementation<br><br>
For Software:<br>

Installation<br>
npm install<br>

Create a .env file in the project root and add the Groq API key:<br>

GROQ_API_KEY=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<br>

Run<br>
npm start<br>

Then open:<br>

http://localhost:3000<br><br>

Project Documentation<br>
For Software:<br>

Screenshots 
<img width="1832" height="933" alt="Screenshot 2026-09-12 045833" src="https://github.com/user-attachments/assets/06856f0a-63b3-4f7f-8b75-b040a38afc23" />


<img width="1005" height="802" alt="Screenshot 2026-09-12 045843" src="https://github.com/user-attachments/assets/62cdca7f-bc70-4ac7-b164-1fd317293f8c" />


<img width="1018" height="872" alt="Screenshot 2026-09-12 045903" src="https://github.com/user-attachments/assets/998b7e85-b815-486b-b630-ca8e137974f1" />

<img width="828" height="852" alt="Screenshot 2026-09-12 050009" src="https://github.com/user-attachments/assets/bc3176b9-167b-43e5-8b31-b303c47c3029" />

<img width="1312" height="788" alt="Screenshot 2026-09-12 050042" src="https://github.com/user-attachments/assets/2aa11e64-2c6a-41d1-85bb-4efc01cabf2f" />


Diagrams

```mermaid
flowchart TD
    A[Open Website] --> B[Intro Animation]
    B --> C{Who's Playing?}

    C -->|You Play| D[Random Question]
    D --> E[20 Second Timer]
    E --> F[Voice Answer]
    F --> G{Is Answer Correct?}
    G -->|Yes| H[LOSE 💀]
    G -->|No| I[WIN 🎉]
    E -->|No Answer| H

    C -->|Me Play| J[Enter / Speak Question]
    J --> K[Send to Backend]
    K --> L[Groq AI]
    L --> M[Generate Confidently Wrong Answer]
    M --> N[Display Absurd Answer 🤖]
```

**Workflow:** The game starts with an intro animation and lets the player choose between **You Play**, where they must answer questions incorrectly using voice recognition, and **Me Play**, where the AI generates confidently wrong answers. A correct answer or no answer results in a loss, while a sufficiently wrong answer wins the game.



Project Demo
Video

https://github.com/user-attachments/assets/a989b34e-959e-4221-9adb-1967767ca0e3
The video demonstrates the complete process of building and testing **Wrong Answers Only**, from developing the game interface and implementing the gameplay logic to testing voice recognition, timers, sound effects, and the AI-powered “Me Play” feature. It also shows the final game being run and tested to make sure everything works as intended.

Made with ❤️ at TinkerHub Useless Projects
