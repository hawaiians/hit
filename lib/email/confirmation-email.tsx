import SendGrid from "@sendgrid/mail";
import { ADMIN_EMAILS, getEmailTemplate, REPLY_EMAIL } from "./utils";
import ConfirmationEmail from "@/emails/confirmation-email";
import { render } from "@react-email/components";
SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailTemplateProps {
  firebaseId?: string;
  name: string;
}

export interface SendConfirmationEmailProps extends EmailTemplateProps {
  email: string;
}

export async function sendConfirmationEmails({
  email,
  firebaseId,
  name,
}: SendConfirmationEmailProps) {
  const options = {
    from: {
      email: REPLY_EMAIL,
      name: "Hawaiians in Tech",
    },
    to: email,
    subject: "Welcome to Hawaiians in Tech",
    html: render(
      <ConfirmationEmail
        email={email}
        memberName={name}
        firebaseId={firebaseId}
      />,
    ),
  };

  try {
    await SendGrid.send(options);
  } catch {
    console.error("Error sending confirmation email to", email);
  }
}
