import { DISCORD_URL, GITHUB_URL } from "@/pages/about";
import {
  Button,
  Text,
  Link,
  Row,
  Column,
  Section,
} from "@react-email/components";
import * as React from "react";
import Base from "./ui/base";
import CTABlock from "./ui/cta-block";

export default function ConfirmationEmail({
  firebaseId = "id-placeholder",
  memberName = "Name Inoa",
  email = "placeholder@hawaiiansintech.org",
}: {
  firebaseId: string;
  memberName: string;
  email: string;
}) {
  const VERIFICATION_LINK = "#";

  return (
    <Base
      preview="Our little hui grows by one (yeah, you)"
      title="Welcome to Hawaiians in Tech"
    >
      <Text className="text-xl text-center">
        Welcome to <strong>Hawaiians in Tech</strong>
      </Text>
      {VERIFICATION_LINK && (
        <CTABlock
          nodes={[
            <Text className="text-stone-600 text-xs text-center pr-4 my-0">
              You signed up with {email}
            </Text>,
            <Button
              href={VERIFICATION_LINK}
              className="border-stone-200 text-sm tracking-wide border border-solid text-stone-600 px-2 py-1 rounded text-center"
            >
              Verify Email
            </Button>,
          ]}
        />
      )}

      <Text className="mt-5">Aloha kāua e {memberName},</Text>
      <Text>
        Mahalo nui for joining Hawaiians In Tech! We&rsquo;re excited to welcome
        you into our hui of Native Hawaiians in technical fields and in the
        technology industry. Together we can inspire and support each other.
      </Text>
      <Text>
        A community manager will reach out once we review your submission and
        get you added to the directory. Beyond that, this is a pretty
        (intentionally) simple operation. 🤙🏼🤙🏽🤙🏾
      </Text>

      <Section className="text-sm">
        <Row>
          <Column className="w-12 text-4xl text-stone-500 font-semibold">
            🖥️
          </Column>
          <Column>
            <Link
              className="text-inherit underline"
              href="https://hawaiiansintech.org?utm_source=confirmation-email-body"
            >
              Connect with people who share an area of focus
            </Link>
            . Shooting a simple introductory DM on LinkedIn can go a long way in
            building your professional network. Mai hilahila.
          </Column>
        </Row>
        <Row className="my-2">
          <Column className="w-12 text-4xl text-stone-500 font-semibold">
            💬
          </Column>
          <Column>
            <Link
              className="text-inherit underline"
              href={`${DISCORD_URL}?utm_source=confirmation-email-body`}
            >
              Join the discussion on our Discord server
            </Link>
            . Even if you&rsquo;ve never heard of it, it&rsquo;s just like
            Slack. Our busiest channels are{" "}
            <strong className="font-semibold">#opportunities</strong> and{" "}
            <strong className="font-semibold">#events</strong>.
          </Column>
        </Row>
        <Row>
          <Column className="w-12 text-4xl text-stone-500 font-semibold">
            ⌨️
          </Column>
          <Column>
            <Link className="text-inherit underline" href={GITHUB_URL}>
              Contribute to our repository on GitHub
            </Link>
            . We welcome all ideas and moving hands on keyboards. Participate in
            code reviews; both to offer technical mentorship and seek it out!
          </Column>
        </Row>
      </Section>

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
      {firebaseId && (
        <Text className="text-xs mt-2 mb-0 italic text-stone-400 text-center">
          {firebaseId}
        </Text>
      )}
    </Base>
  );
}
