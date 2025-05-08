import React, { useState } from "react";

const AIPage: React.FC = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAskAI = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userPrompt }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from the server");
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Interaction</h1>
      <textarea
        value={userPrompt}
        onChange={(e) => setUserPrompt(e.target.value)}
        placeholder="Enter your question for the AI"
        rows={5}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleAskAI} disabled={loading || !userPrompt}>
        {loading ? "Loading..." : "Ask AI"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {response && (
        <div style={{ marginTop: "20px" }}>
          <h3>AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIPage;