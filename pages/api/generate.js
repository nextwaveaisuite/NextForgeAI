import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  const { prompt, user_id } = req.body;

  // Fetch user's current credits
  const { data: user, error } = await supabase
    .from('users')
    .select('credits')
    .eq('id', user_id)
    .single();

  if (error || !user || user.credits <= 0) {
    return res.status(403).json({ error: 'Insufficient credits.' });
  }

  // Call OpenAI
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const result = await response.json();

  // Deduct 1 credit
  await supabase
    .from('users')
    .update({ credits: user.credits - 1 })
    .eq('id', user_id);

  // Log usage
  await supabase.from('usage_logs').insert({
    user_id,
    action: prompt,
    credits_used: 1
  });

  res.status(200).json({ reply: result.choices?.[0]?.message?.content || "No reply." });
}
