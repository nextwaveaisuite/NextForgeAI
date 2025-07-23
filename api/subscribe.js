export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { email } = req.body;

  try {
    const response = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 'api-key h67sprn9pa6n48g80743krjwcpwkv263'
      },
      body: JSON.stringify({
        email: email,
        name: "",
        campaign: {
          name: "nextwaveaisuite"
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
