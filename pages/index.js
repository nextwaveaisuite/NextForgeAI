import { useState } from 'react';

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (data.result) {
        setResponse(data.result);
      } else {
        setResponse(data.error || 'No response');
      }
    } catch (err) {
      setResponse('Request failed');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🧠 NextForge AI Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="60"
          placeholder="Ask anything..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Thinking...' : 'Generate'}
        </button>
      </form>
      <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
        {response && (
          <>
            <h3>💡 Response:</h3>
            <p>{response}</p>
          </>
        )}
      </div>
    </div>
  );
}
