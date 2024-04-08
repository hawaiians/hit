import { cn } from "@/lib/utils";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
} from "@react-email/components";
const tailwindConfig = require("../../tailwind.config.js");

export default function Base({
  children,

  preview,
  title,
  align = "center",
}: {
  children: React.ReactNode;
  preview?: string;
  title?: string;
  align?: "left" | "center" | "right";
}) {
  return (
    <Html>
      {preview && <Preview>{preview}</Preview>}
      <Tailwind config={tailwindConfig}>
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
          <Container className="bg-white p-4 pt-8 rounded-xl border border-solid border-stone-200 m-4 mx-auto max-w-[540px]">
            <Img
              src="http://cdn.mcauto-images-production.sendgrid.net/c3cb94bafc1ef987/5ff60b90-4257-4ae9-babb-697d189b2df0/240x231.png"
              alt="Hawaiians in Tech"
              className={cn(
                `w-16 mb-8`,
                align === "center" && "mx-auto",
                align === "right" && "ml-auto",
              )}
            />
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
