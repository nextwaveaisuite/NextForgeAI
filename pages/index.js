// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate adding to waitlist (replace with Supabase or API call)
    console.log('Joining waitlist with:', email);
    setJoined(true);
  };

  return (
    <div style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h1>🚀 Welcome to NextForge AI</h1>
      <p>The fastest way to build and monetize your own AI SaaS tools</p>
      
      {!joined ? (
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <input 
            type="email"
            required
            placeholder="Enter your email to join the waitlist"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '0.5rem',
              fontSize: '1rem',
              width: '300px',
              marginBottom: '1rem',
            }}
          />
          <br />
          <button type="submit" style={{
            padding: '0.7rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px'
          }}>
            Join the Launch Waitlist
          </button>
        </form>
      ) : (
        <p style={{ marginTop: '2rem', color: 'green' }}>✅ You're on the waitlist! Stay tuned.</p>
      )}
    </div>
  );
}
