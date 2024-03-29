import { DISCORD_URL, GITHUB_URL } from "@/pages/about";
import {
  Tailwind,
  Button,
  Head,
  Text,
  Html,
  Img,
  Preview,
  Container,
  Heading,
  Body,
  Link,
  Hr,
  Row,
  Column,
  Section,
} from "@react-email/components";
import * as React from "react";
const tailwindConfig = require("../tailwind.config.js");

export default function ConfirmationEmail({
  firebaseId,
  memberName,
}: {
  firebaseId: string;
  memberName: string;
}) {
  const VERIFICATION_LINK = "#";

  return (
    <Tailwind config={tailwindConfig}>
      <Html>
        <Preview>Our little hui grows by one (yeah, you)</Preview>
        <Head>
          <title>Welcome to Hawaiians in Tech</title>
        </Head>
        <Body
          className="text-stone-800 font-sans"
          style={{
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          }}
        >
          <Container className="bg-white p-4 rounded-xl border border-solid border-stone-200 m-4 mx-auto max-w-[480px]">
            <Img
              src="http://cdn.mcauto-images-production.sendgrid.net/c3cb94bafc1ef987/5ff60b90-4257-4ae9-babb-697d189b2df0/240x231.png"
              alt="Hawaiians in Tech"
              className="w-16 mb-2 mx-auto"
            />
            <Text className="text-xl text-center">
              Welcome to <strong>Hawaiians in Tech</strong>
            </Text>
            {VERIFICATION_LINK && (
              <Section className="p-2 bg-stone-100 mb-4 rounded">
                <Row>
                  <Column className="w-1/2 border-r border-r-stone-200 border-solid border-l-0 border-t-0 border-b-0">
                    <Text className="text-stone-600 text-xs text-right pr-4 my-0">
                      You signed up with{" "}
                      <strong>email@hawaiiansintech.org</strong>
                    </Text>
                  </Column>
                  <Column className="text-center">
                    <Button
                      href={VERIFICATION_LINK}
                      className="border-stone-200 text-sm tracking-wide border border-solid text-stone-600 px-2 py-1 rounded text-center"
                    >
                      Verify Email
                    </Button>
                  </Column>
                </Row>
              </Section>
            )}

            <Text>Aloha kāua e {memberName ?? "kanak"},</Text>
            <Text>
              Mahalo nui for joining Hawaiians In Tech! We&rsquo;re excited to
              welcome you into our hui of Native Hawaiians in technical fields
              and in the technology industry. Together we can inspire and
              support each other.
            </Text>
            <Text>
              A community manager will reach out once we review your submission
              and get you added to the directory. Beyond that, this is a pretty
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
                  . Shooting a simple introductory DM on LinkedIn can go a long
                  way in building your professional network. Mai hilahila.
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
                  . We welcome all ideas and moving hands on keyboards.
                  Participate in code reviews; both to offer technical
                  mentorship and seek it out!
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
              <Text className="text-xs text-inherit inline my-0 italic text-stone-400">
                {firebaseId}
              </Text>
            )}
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
