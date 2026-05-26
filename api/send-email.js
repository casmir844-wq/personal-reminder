import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { email, name } = req.body;
  
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: [email],
    subject: 'Hello!',
    html: `<p>Hi ${name}, welcome!</p>`
  });
  
  if (error) return res.status(400).json({ error });
  res.status(200).json({ success: true });
                        }
