import * as React from "react";
import Base from "./ui/base";
import { Button, Link, Text } from "@react-email/components";
import { DISCORD_URL } from "@/pages/about";

export default function LoginPromptEmail({
  emailAddress = "[placeholder@hawaiiansintech.org]",
  promptLink = "[https://hawaiiansintech.org/login]",
}: {
  emailAddress: string;
  promptLink: string;
}) {
  return (
    <Base
      preview={`New Member Submission from ${promptLink}`}
      title={`New Member Submission from ${promptLink}`}
      align="center"
    >
      <Text className="text-3xl text-center">
        Login Link for
        <br />
        <strong>Hawaiians in Tech</strong>
      </Text>
      <Text>
        We just received a request to sign in to{" "}
        <Link
          href="https://hawaiiansintech.org/?utm_source=login-link-email-body"
          className="font-semibold text-inherit underline"
        >
          Hawaiians in Technology
        </Link>{" "}
        using this email address (
        <span className="text-stone-500">{emailAddress}</span>). To log in to
        your account, click the link below:
      </Text>
      <Button
        href={promptLink}
        className="bg-brown-600 text-white py-2 px-4 text-sm rounded"
      >
        Log In to Hawaiians in Tech
      </Button>
      <Text>
        If you did not request this link, you can safely ignore this email.
      </Text>
      <Text className="text-stone-500 text-xs">
        If the problem persists, please contact us on{" "}
        <Link href={DISCORD_URL} className="text-inherit underline">
          our Discord server
        </Link>
        .
      </Text>
    </Base>
  );
}
