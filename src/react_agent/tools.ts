import { MultiServerMCPClient } from "@langchain/mcp-adapters";

const MCP_SERVERS = {
  // Add MCP servers here
};

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
 *
 * Note: You can create custom tools by implementing the Tool interface from @langchain/core/tools
 * and add them to this array.
 * See https://js.langchain.com/docs/how_to/custom_tools/#tool-function for more information.
 */

export const TOOLS = [...mcpTools];
