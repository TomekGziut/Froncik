// filepath: c:\Users\barte\Documents\GitHub\ollama\backend\src\ollama\tools\getSecret.ts
import { ToolFunction } from "../toolsLoader";

const functions: ToolFunction[] = [
  {
    type: "function",
    function: {
      name: "getSecret",
      description: "Returns a secret string/value.",
    },
    execute: async (): Promise<{ value: string }> => {
      return { value: "there is no secret!" };
    },
  },
];

export default functions;