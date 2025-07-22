import { useState } from 'react';

export default function Dashboard() {
  const [credits, setCredits] = useState(10);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input })
    });
    const data = await res.json();
    setResponse(data.result);
    setCredits((prev) => prev - 1);
  };

  return (
    <div style={{
      padding: "2rem",
      fontFamily: "sans-serif",
      background: "#f9fbff",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: "2rem", color: "#1f3b70" }}>
        🚀 NextForge AI – Dashboard
      </h1>

      <p>Credits left: <strong>{credits}</strong></p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your prompt here..."
        rows={4}
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "1rem"
        }}
      />

      <br />

      <button
        onClick={handleGenerate}
        disabled={!input || credits <= 0}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Generate with GPT
      </button>

      {response && (
        <div style={{
          marginTop: "2rem",
          background: "#fff",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          maxWidth: "600px"
        }}>
          <h3>💡 Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
