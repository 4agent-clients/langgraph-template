import express from "express";
import cors from "cors";
import { graph } from "./react_agent/graph.js";
import { HumanMessage } from "@langchain/core/messages";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to run the agent
app.post("/run-agent", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Create initial state with user message
    const state = {
      messages: [new HumanMessage(prompt)],
    };

    // Run the agent with default configuration
    const result = await graph.invoke(state);

    // Return the agent's response
    return res.status(200).json({
      result: result.messages[result.messages.length - 1],
    });
  } catch (error) {
    console.error("Error running agent:", error);
    return res.status(500).json({ error: "Failed to run agent" });
  }
});

// Health check endpoint
app.get("/health", (_, res) => {
  res.status(200).json({ status: "ok" });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server;
