import { DISCORD_URL, GITHUB_URL } from "@/pages/about";
import {
  Button,
  Text,
  Row,
  Column,
  Section,
  Link,
} from "@react-email/components";
import * as React from "react";
import CTABlock from "./ui/cta-block";
import Base from "./ui/base";
import List from "./ui/list";

export default function NewMemberEmail({
  memberName = "Name Inoa",
  location = "SF, CA",
  firebaseId = "id-placeholder",
  email = "placeholder@hawaiiansintech.org",
  title = "Software Engineer",
  suggested = ["Focus", "Industry"],
  url = "https://hawaiiansintech.org",
}: {
  memberName: string;
  location: string;
  title: string;
  url: string;
  firebaseId: string;
  email: string;
  suggested?: string[];
}) {
  const FIREBASE_URL = `https://console.firebase.google.com/project/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/firestore/data/~2Fmembers~2F${firebaseId}`;

  return (
    <Base
      preview="Our little hui grows by one (yeah, you)"
      title={`New Member Submission from ${memberName}`}
    >
      <Text className="text-xl text-center">
        Pending Submission: <strong>{memberName}</strong>
      </Text>
      <Text>
        A new member <strong className="font-semibold">{memberName}</strong> (
        <Link href={`mailto:${email}`} className="text-stone-500 underline">
          {email}
        </Link>
        ) submitted their information.
      </Text>
      <List
        nodes={[
          {
            icon: "💬",
            label: (
              <>
                Check freeform field &ldquo;
                <strong className="font-semibold">{title}</strong>
                &rdquo; for misspelling and/or appropriateness.
                {suggested && (
                  <>
                    {" "}
                    They also suggested{" "}
                    {suggested.map((s, i) => (
                      <>
                        &ldquo;<strong className="font-semibold">{s}</strong>
                        &rdquo;
                        {(i < suggested.length - 2 && ", ") ||
                          (i === suggested.length - 2 && " and ")}
                      </>
                    ))}
                    .
                  </>
                )}
              </>
            ),
          },
          {
            icon: "🔗",
            label: (
              <>
                Check that their URL works.{" "}
                <Link href={url} className="text-stone-500 underline">
                  {url}
                </Link>
              </>
            ),
          },
          {
            icon: "🌏",
            label: (
              <>
                Parse &ldquo;
                <strong className="font-semibold">{location}</strong>&rdquo; for
                the Location and indexed/searchable Region. Always try to merge,
                when appropriate. Seek the use of proper diacriticals, where{" "}
                <Link
                  href="https://wehewehe.org"
                  className="text-stone-500 underline"
                >
                  wehewehe.org
                </Link>{" "}
                is your friend!
              </>
            ),
          },
        ]}
      />
      <Text>
        Move their Status to
        <span className="py-0.5 px-2 inline-block my-0 bg-emerald-200 text-emerald-700 mx-1 rounded-full text-xs font-medium tracking-wide">
          APPROVED
        </span>
        when all looks well. Then, send a welcome email to let them know
        they&rsquo;re in!
      </Text>
      <Text>
        Move their status to
        <span className="py-0.5 px-2 inline-block my-0 bg-violet-200 text-violet-700 mx-1 rounded-full text-xs font-medium tracking-wide">
          IN PROGRESS
        </span>{" "}
        if you have any questions or suggestions. Be concise/clear about the
        intention of suggestions. Share progress in a leads room on{" "}
        <Link href={DISCORD_URL} className="text-stone-500 underline">
          Discord
        </Link>
        !
      </Text>
      <Text>
        Move their status to
        <span className="py-0.5 px-2 inline-block my-0 bg-red-200 text-red-700 mx-1 rounded-full text-xs font-medium tracking-wide">
          ARCHIVED
        </span>{" "}
        if it was made in error or any ill intent.
      </Text>
      <CTABlock
        className="mt-4"
        nodes={[
          <>You are receiving this because you are a community manager</>,
          <CTABlock.Button href={FIREBASE_URL}>
            Review {memberName}
          </CTABlock.Button>,
        ]}
      />
      {firebaseId && (
        <Text className="text-xs mt-2 mb-0 italic text-stone-400 text-center">
          {firebaseId}
        </Text>
      )}
      {/* //   const firebaseUrl = `https://console.firebase.google.com/project/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/firestore/data/~2Fmembers~2F${firebaseId}`;
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
  //   }); */}
    </Base>
  );
}
