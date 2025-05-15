# LangGraph.js ReAct Agent Template

![Graph view in LangGraph studio UI](./static/studio_ui.png)

The core logic, defined in `src/react_agent/graph.ts`, demonstrates a flexible ReAct agent that iteratively reasons about user queries and executes actions, showcasing the power of this approach for complex problem-solving tasks.

## What it does

The ReAct agent:

1. Takes a user **query** as input
2. Reasons about the query and decides on an action
3. Executes the chosen action using available tools
4. Observes the result of the action
5. Repeats steps 2-4 until it can provide a final answer

By default, it's set up with a basic set of tools, but can be easily extended with custom tools to suit various use cases.

# LangGraph Agent Server

This project provides a server with an API endpoint to run a LangGraph ReAct agent.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Build the project:

```bash
npm run build
```

3. Start the server:

```bash
npm run start:server
```

The server will run on port 3000 by default, which can be changed using the `PORT` environment variable.

## API Endpoints

### Run Agent

**Endpoint:** `POST /run-agent`

**Request Body:**

```json
{
  "prompt": "Your question or instruction for the agent"
}
```

**Response:**

```json
{
  "result": {
    "content": "The agent's response",
    ... // Additional message properties
  }
}
```

### Health Check

**Endpoint:** `GET /health`

**Response:**

```json
{
  "status": "ok"
}
```

## Example Usage

```bash
curl -X POST http://localhost:3000/run-agent \
  -H "Content-Type: application/json" \
  -d '{"prompt": "What is the weather in New York?"}'
```
