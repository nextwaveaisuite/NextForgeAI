// pages/index.js
export default function ComingSoon() {
  return (
    <div style={{
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      color: 'white',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 NextForge AI Is Launching Soon</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem' }}>
        The fastest way to build and monetize your own AI-powered SaaS tools — in under 60 seconds.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
        <li>✅ AI-Powered No-Code SaaS Builder</li>
        <li>✅ Credit System with Free + Paid Tiers</li>
        <li>✅ Referral Rewards for Sharing</li>
        <li>✅ White Label Upgrade Option</li>
        <li>✅ Monetize Instantly with Built-in GPT Modes</li>
      </ul>
      <a
        href="#"
        style={{
          backgroundColor: '#ffcc00',
          color: '#000',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        🔔 Join the Launch Waitlist
      </a>
    </div>
  );
}

   
