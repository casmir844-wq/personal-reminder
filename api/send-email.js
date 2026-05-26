import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { email, name } = req.body;

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "📬 We-Mail Notification",
    html: `<p>Hi ${name}, your reminder is active.</p>`
  });

  if (error) return res.status(400).json({ error });

  return res.status(200).json({ success: true });
}
