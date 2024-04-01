import Code from "@/components/Code";
import Logo from "@/components/Logo";
import MetaTags from "@/components/Metatags";
import Plausible from "@/components/Plausible";
import { Subtitle } from "@/components/Title";
import { Computer, MessageCircleHeart, Network } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { DISCORD_URL } from "../about";

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "Thank You · Hawaiians in Technology",
    },
  };
}

export default function ThankYou({ pageTitle }) {
  return (
    <>
      <Head>
        <Plausible />
        <MetaTags title={pageTitle} />
        <title>{pageTitle}</title>
      </Head>
      <div className="column flex h-screen flex-col">
        <header className="relative flex w-full shrink-0 items-center p-4">
          <div className="ml-4 grow">
            <Link href="/">Back to home</Link>
          </div>
          <Logo />
        </header>
        <main className="flex max-w-3xl grow flex-col justify-center gap-4 px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Subtitle text="Submission&nbsp;successful" />
            <img
              src={"/images/shaka.gif"}
              alt="Animated shaka, rotating left to right, real loose"
              className="w-20"
            />
          </div>

          <p>
            <strong>
              A community manager should be reaching out once we review your
              submission
            </strong>{" "}
            and get you added to the directory. Beyond that, this is a pretty
            (intentionally) simple operation. 🤙🏼🤙🏽🤙🏾
          </p>

          <p>
            You should have received a confirmation email from us. If you
            didn't, you may need to add{" "}
            <Code>no-reply@hawaiiansintech.org</Code> to your address book.
          </p>

          <div className="flex justify-evenly gap-2">
            <Link
              href="https://hawaiiansintech.org"
              className="flex flex-col gap-2"
            >
              <Computer />
              <h3 className="text-foreground font-semibold">
                Connect with people who share an area of focus.
              </h3>
              <span>→ Home</span>
            </Link>
            <Link
              href="https://hawaiiansintech.org/discord"
              className="flex flex-col gap-2"
            >
              <MessageCircleHeart />
              <h3 className="text-foreground font-semibold">
                Join the discussion on our Discord server.
              </h3>
              <span>→ Discord</span>
            </Link>
            <Link href={`${DISCORD_URL}`} className="flex flex-col gap-2">
              <Computer />
              <h3 className="text-foreground font-semibold">
                Contribute to our projects on GitHub.
              </h3>
              <span>→ Github</span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
