import { verifyAdminToken, verifyAuthHeader } from "@/lib/api-helpers/auth";
import { sendNewsletter0524 } from "@/lib/email/send-newsletter-0524";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  if (req.body.unsubscribeUrl === undefined) {
    return res.status(422).json({ error: "Missing unsubscribeUrl parameter" });
  } else if (req.body.email === undefined) {
    return res.status(422).json({ error: "Missing email parameter" });
  }

  try {
    const token = await verifyAuthHeader(req);
    if (!token) return;
    const isAdmin = await verifyAdminToken(token);
    if (!isAdmin) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await sendNewsletter0524({
      email: req.body.email,
      unsubscribeUrl: req.body.unsubscribeUrl,
    });
    res.status(200).json({
      message: `Successfully updated email for ${req.body.currentUser}`,
    });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
