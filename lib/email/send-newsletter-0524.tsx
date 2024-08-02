import SendGrid from "@sendgrid/mail";
import { render } from "@react-email/components";
import Newsletter0524 from "../../emails/newsletter-0524";
import { REPLY_EMAIL } from "@/lib/email/utils";
SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export interface SendNewsletter0524Props {
  email: string;
  unsubscribeUrl: string;
}

export async function sendNewsletter0524({
  email,
  unsubscribeUrl,
}: SendNewsletter0524Props) {
  try {
    if (!email) throw new Error("No email provided");
    if (!unsubscribeUrl) throw new Error("No unsubscribeUrl provided");

    await SendGrid.send({
      from: {
        email: REPLY_EMAIL,
        name: "Hawaiians in Tech",
      },
      to: email,
      subject: `🌺 Huuui! Hawaiian in Tech May Newsletter`,
      html: render(<Newsletter0524 unsubscribeUrl={unsubscribeUrl} />),
    });
  } catch (error) {
    console.error(`Error sending confirmation email to ${email}`, error);
    throw error;
  }
}
