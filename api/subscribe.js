export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { email } = req.body;

  // Default: Use Craigie's key + list (for now)
  const apiKey = 'api-key esejc0llmz4vby5jrgprhdpn8zpag781';
  const campaignId = 'PASTE-YOUR-REAL-CAMPAIGN-ID-HERE'; // TEMP placeholder

  try {
    const response = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': apiKey
      },
      body: JSON.stringify({
        email: email,
        name: "",
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
