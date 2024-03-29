import {
  Tailwind,
  Head,
  Html,
  Img,
  Preview,
  Container,
  Body,
} from "@react-email/components";
import * as React from "react";
const tailwindConfig = require("../tailwind.config.js");

export default function Email({
  children,
  preview,
  title,
}: {
  children: React.ReactNode;
  preview?: string;
  title?: string;
}) {
  return (
    <Tailwind config={tailwindConfig}>
      <Html>
        {preview && <Preview>{preview}</Preview>}
        {title && (
          <Head>
            <title>{title}</title>
          </Head>
        )}
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
            {children}
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
