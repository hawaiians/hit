import SendGrid from "@sendgrid/mail";
import WelcomeEmail from "@/emails/welcome-email";
import { render } from "@react-email/components";
import { REPLY_EMAIL } from "./email/utils";
import PendingMemberEmail from "@/emails/pending-member-email";
SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export interface SendConfirmationEmailProps {
  email: string;
  name: string;
  location: string;
  title: string;
  link: string;
  recordID: string;
}

export async function sendConfirmationEmails({
  email,
  recordID,
  name,
  location,
  title,
  link,
}: SendConfirmationEmailProps) {
  try {
    if (!recordID) throw new Error("No recordID provided");
    if (!email) throw new Error("No email provided");
    if (!name) throw new Error("No name provided");
    if (!location) throw new Error("No location provided");
    if (!title) throw new Error("No title provided");
    if (!link) throw new Error("No link provided");

    await SendGrid.send({
      from: {
        email: REPLY_EMAIL,
        name: "Hawaiians in Tech",
      },
      to: email,
      subject: "Welcome to Hawaiians in Tech",
      html: render(
        <WelcomeEmail email={email} name={name} recordID={recordID} />,
      ),
    });

    await SendGrid.send({
      from: {
        email: REPLY_EMAIL,
        name: "Hawaiians in Tech",
      },
      to: email,
      subject: `Member Submission: ${name}`,
      html: render(
        <PendingMemberEmail
          email={email}
          name={name}
          recordID={recordID}
          location={location}
          title={title}
          link={link}
        />,
      ),
    });
  } catch (error) {
    console.error(`Error sending confirmation email to ${email}`, error);
  }
}
