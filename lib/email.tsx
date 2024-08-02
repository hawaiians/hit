import SendGrid from "@sendgrid/mail";
import WelcomeEmail from "@/emails/welcome-email";
import { render } from "@react-email/components";
import { ADMIN_EMAILS, REPLY_EMAIL } from "./email/utils";
import PendingMemberEmail from "@/emails/pending-member-email";
import LoginPromptEmail from "@/emails/login-prompt";
SendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export interface SendConfirmationEmailProps {
  email: string;
  name: string;
  location: string;
  link: string;
  recordID: string;
  title?: string; // title is only non-required freeform field on sign up
}

export async function sendConfirmationEmails({
  email,
  recordID,
  name,
  location,
  link,
  title,
}: SendConfirmationEmailProps) {
  try {
    // TODO better error handling, thrown in `create-member`
    if (!recordID) throw new Error("No recordID provided");
    if (!email) throw new Error("No email provided");
    if (!name) throw new Error("No name provided");
    if (!location) throw new Error("No location provided");
    if (!link) throw new Error("No link provided");

    await SendGrid.send({
      from: {
        email: REPLY_EMAIL,
        name: "Hawaiians in Tech",
      },
      to: email,
      subject: "Welcome to Hawaiians in Tech",
      html: render(
        <WelcomeEmail
          email={email}
          name={name}
          recordID={recordID}
          location={location}
        />,
      ),
    });

    await SendGrid.send({
      from: {
        email: REPLY_EMAIL,
        name: "Hawaiians in Tech",
      },
      to: ADMIN_EMAILS,
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
    throw error;
  }
}

export async function sendLoginPromptEmail({
  emailAddress,
  promptLink,
}: {
  emailAddress: string;
  promptLink: string;
}) {
  try {
    await SendGrid.send({
      from: {
        email: REPLY_EMAIL,
        name: "Hawaiians in Tech",
      },
      to: emailAddress,
      subject: "Login to Hawaiians in Tech",
      html: render(
        <LoginPromptEmail
          emailAddress={emailAddress}
          promptLink={promptLink}
        />,
      ),
    });
  } catch (error) {
    console.error(`Error sending login prompt email to ${emailAddress}`, error);
    throw error;
  }
}
