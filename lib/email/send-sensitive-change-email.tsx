import SendGrid from "@sendgrid/mail";
import { render } from "@react-email/components";
import { ADMIN_EMAILS, REPLY_EMAIL } from "@/lib/email/utils";
import SensitiveChangesEmail from "@/emails/sensitive-changes-email";
SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export interface SendSensitiveChangesEmailsProps {
  name: string;
  changes: string;
  recordID: string;
}

export async function sendSensitiveChangesEmail({
  name,
  changes,
  recordID,
}: SendSensitiveChangesEmailsProps) {
  try {
    if (!changes) throw new Error("No changes provided");

    await SendGrid.send({
      from: {
        email: REPLY_EMAIL,
        name: "Hawaiians in Tech",
      },
      to: ADMIN_EMAILS,
      subject: `Sensitive Changes: ${name}`,
      html: render(
        <SensitiveChangesEmail
          name={name}
          changes={changes}
          recordID={recordID}
        />,
      ),
    });
  } catch (error) {
    console.error(`Error sending Sensitive Changes email to admin`, error);
    throw error;
  }
}
