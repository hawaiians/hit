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
      <ConfirmationEmail memberName={name} firebaseId={firebaseId} />,
    ),
  };

  try {
    await SendGrid.send(options);
  } catch {
    console.error("Error sending confirmation email to", email);
  }

  //   const firebaseUrl = `https://console.firebase.google.com/project/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/firestore/data/~2Fmembers~2F${firebaseId}`;
  //   const MESSAGE_BODY_2 = `
  //     <p>Get started by opening up the pending <a href="${firebaseUrl}">Submission</a> on Firebase.</p>
  //     <p><strong>1. Review the submission.</strong></p><ul><li>For Location, we'll need to manually look over and connect the relevant Region (which is a separate, indexed/searchable field).</li><li>If any freeform fields (location/title/suggested/etc.) were used, check for misspelling and/or appropriateness. Remember to try use proper diacriticals (wehewehe.org is your friend).</li><li>Check that their URL works.</li></ul>
  //     <p><strong>2. Reach out to ${name} at ${email} about their new submission.</strong> Be concise/clear about intention of suggestions.</p>
  //     <p><strong>3. If all goes well,</strong> double-check all fields and move their Status to Approved!</p>
  //     ${
  //       firebaseId
  //         ? `<p><em><strong>Member ID:</strong> ${firebaseId}</em></p>`
  //         : ""
  //     }
  //   `;
  //   const emailTemplate2 = getEmailTemplate({
  //     body: MESSAGE_BODY_2,
  //     prependMessage: name,
  //     title: `New Member Submission from ${name}`,
  //   });
  //   await SendGrid.sendMultiple({
  //     to: ADMIN_EMAILS,
  //     from: {
  //       email: REPLY_EMAIL,
  //       name: "Hawaiians in Tech",
  //     },
  //     subject: `New Submission: ${name}`,
  //     html: emailTemplate2,
  //   });
}
