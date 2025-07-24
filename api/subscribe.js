export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { email } = req.body;

  // 🔧 === ENTER YOUR DETAILS BELOW ===
  const apiKey = 'api-key e6e8a9db5b1234x9z'; // e.g., api-key abc123xyz456
  const campaignId = 'e6e8a9db5b1234x9z'; // e.g., e6e8a9db5b1234x9z

  try {
    const response = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': apiKey
      },
      body: JSON.stringify({
        email: email,
        name: "", // optional
        campaign: {
          campaignId: campaignId
        }
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json(error);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
}
