import { DISCORD_URL, GITHUB_URL } from "@/pages/about";
import { Text, Link } from "@react-email/components";
import * as React from "react";
import Base from "./ui/base";
import CTABlock from "./ui/cta-block";
import List from "./ui/list";
import { MemberFields } from "@/pages/api/create-member";

export default function WelcomeEmail({
  name = "[Name Inoa]",
  recordID = "[id-placeholder]",
  email = "[placeholder@hawaiiansintech.org]",
}: MemberFields) {
  const VERIFICATION_LINK = "#";

  return (
    <Base
      preview="Our little hui grows by one (yeah, you)"
      title="Welcome to Hawaiians in Tech"
    >
      <Text className="text-xl text-center">
        Mahalo for signing up with <strong>Hawaiians in Tech</strong>
      </Text>
      {VERIFICATION_LINK && (
        <CTABlock
          nodes={[
            <Text className="text-stone-600 text-xs text-center pr-4 my-0">
              You signed up with {email}
            </Text>,
            <CTABlock.Button href={VERIFICATION_LINK}>
              Verify Email
            </CTABlock.Button>,
          ]}
        />
      )}

      <Text className="mt-5">Aloha kāua e {name},</Text>
      <Text>
        Mahalo nui for joining Hawaiians In Tech! We&rsquo;re excited to welcome
        you into our hui of Native Hawaiians in technical fields and in the
        technology industry. Together we can inspire and support each other.
      </Text>
      <Text>
        A community manager should be reaching out once we review your
        submission and get you added to the directory. Beyond that, this is a
        pretty (intentionally) simple operation. 🤙🏼🤙🏽🤙🏾
      </Text>

      <List
        nodes={[
          {
            icon: "🖥️",
            label: (
              <>
                <Link
                  className="text-inherit font-bold"
                  href="https://hawaiiansintech.org?utm_source=confirmation-email-body"
                >
                  Connect with people who share an area of focus
                </Link>
                . Try searching for others via our Home directory, then shoot an
                introductory DM on LinkedIn or otherwise. Mai hilahila.{" "}
                <Link
                  className="text-inherit text-brown-500"
                  href="https://hawaiiansintech.org?utm_source=confirmation-email-body"
                >
                  → Home
                </Link>
              </>
            ),
          },
          {
            icon: "💬",
            label: (
              <>
                <Link
                  className="text-inherit font-bold"
                  href={`${DISCORD_URL}?utm_source=confirmation-email-body`}
                >
                  Join the discussion on our Discord server
                </Link>
                . Even if you&rsquo;ve never heard of it, it&rsquo;s just like
                Slack. Our busiest channels are{" "}
                <strong className="font-semibold text-stone-600">
                  #opportunities
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-stone-600">
                  #events
                </strong>
                .{" "}
                <Link
                  className="text-inherit font-medium text-brown-500"
                  href="https://hawaiiansintech.org/discord?utm_source=confirmation-email-body"
                >
                  → Discord
                </Link>
              </>
            ),
          },
          {
            icon: "⌨️",
            label: (
              <>
                <Link className="text-inherit font-bold" href={GITHUB_URL}>
                  Contribute to our projects on GitHub
                </Link>
                . We welcome all ideas and moving hands on keyboards. Build
                features; participate in code reviews; offer technical
                mentorship and seek it out!{" "}
                <Link
                  className="text-inherit font-medium text-brown-500"
                  href={GITHUB_URL}
                >
                  → Github
                </Link>
              </>
            ),
          },
        ]}
      />

      <Text className="mb-0">E ola,</Text>
      <Text className="mt-0">Hawaiians in Tech</Text>
      <Text className="text-stone-500 my-0 text-center">
        <Link
          href="https://hawaiiansintech.org/about?utm_source=confirmation-email-footer"
          className="text-xs text-inherit"
        >
          About
        </Link>
        <span className="mx-1">·</span>
        <Link
          href="https://hawaiiansintech.org/privacy-policy?utm_source=confirmation-email-footer"
          className="text-xs text-inherit"
        >
          Privacy Policy
        </Link>
      </Text>
      {recordID && (
        <Text className="text-xs mt-2 mb-0 italic text-stone-400 text-center">
          {recordID}
        </Text>
      )}
    </Base>
  );
}
