import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { MCP_SERVERS } from "./mcps.js";

function initializeMCPClient() {
  return new MultiServerMCPClient({
    throwOnLoadError: false,
    prefixToolNameWithServerName: true,
    additionalToolNamePrefix: "mcp",
    mcpServers: MCP_SERVERS,
  });
}

const client = initializeMCPClient();
const mcpTools = await client.getTools();

/**
 * Export an array of all available tools
 * Add new tools to this array to make them available to the agent
 */

export const TOOLS = [...mcpTools];
