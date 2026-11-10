# Campummate

A responsive campus companion dashboard built with React, TypeScript, Vite, and plain CSS.

## Features
- Overview dashboard with course, class, task, and study-time cards
- Academic planner with a working task checklist
- Course registration demo with add-course and search interactions
- AI helpdesk chat interface (front-end demo with sample assistant replies)
- Responsive sidebar and mobile layout

## Run locally
1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Important
This is a front-end prototype. Course data is held in React state and resets when the page reloads. The AI helpdesk currently uses sample replies; connect a secure backend and an AI API to make it a real AI assistant. Do not put secret API keys in frontend code.
