# README for Backend

## Overview

This backend project is built using Next.js and TypeScript, providing a robust API for handling chat interactions. It integrates various tools to enhance the functionality of the chat assistant.

## Project Structure

The backend is organized as follows:

- **src/**: Contains the main application code.
  - **app/**: The main application folder.
    - **api/**: Contains API routes for handling chat and responses.
      - **chat/**: Handles chat-related requests.
      - **response/**: Manages responses from the assistant.
    - **components/**: Contains React components for the chat interface.
    - **hooks/**: Custom hooks for managing state and logic.
    - **ollama/**: Contains tool implementations and a loader for those tools.
    - **services/**: Contains service files for handling business logic.
- **package.json**: Configuration file for dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file.
- **next.config.ts**: Configuration for Next.js.
- **postcss.config.mjs**: Configuration for PostCSS.
- **eslint.config.mjs**: Configuration for ESLint.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ollama/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Access the API**:
   The API will be available at [http://localhost:3000/api/chat](http://localhost:3000/api/chat) for chat interactions.

## Creating New Tools

To create a new tool, follow these steps:

1. Create a new file in the `src/ollama/tools` directory (e.g., `myNewTool.ts`).
2. Define your tool using the following template:

   ```typescript
   import { ToolFunction } from "../toolsLoader";

   const functions: ToolFunction[] = [
     {
       type: "function",
       function: {
         name: "myNewTool",
         description: "Description of what your tool does",
       },
       execute: async (args: string): Promise<unknown> => {
         // Your tool implementation here
         return { result: "your result" };
       },
     },
   ];

   export default functions;
   ```

3. Import and add your tool to `src/ollama/tools/index.ts`:

   ```typescript
   import myNewTool from "./myNewTool";

   const ollamaTools = [...findCity, ...getWeather, ...getSecret, ...getIpInfo, ...myNewTool];
   ```

The tool will be automatically available to the AI assistant. Make sure to:
- Provide a clear description of what your tool does.
- Handle errors appropriately in the execute function.
- Return a properly typed response.
- Keep the implementation simple and focused.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.