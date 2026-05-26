import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
 
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { email, name } = body;

    if (!email || !name) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Hello!',
      html: `<p>Hi ${name}, welcome!</p>`
    });

    if (error) {
      console.error(error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
