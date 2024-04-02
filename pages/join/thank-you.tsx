import Code from "@/components/Code";
import Logo from "@/components/Logo";
import MetaTags from "@/components/Metatags";
import Plausible from "@/components/Plausible";
import { Subtitle } from "@/components/Title";
import { Computer, MessageCircleHeart } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { DISCORD_URL } from "../about";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Filter, getFilters } from "@/lib/api";
import { FirebaseTablesEnum } from "@/lib/enums";
import { getMembers } from "../api/get-members";

export async function getStaticProps() {
  const { members, focuses, industries } = await getMembers();
  return {
    props: {
      pageTitle: "Thank You · Hawaiians in Technology",
      members: members,
      focuses: await getFilters(
        FirebaseTablesEnum.FOCUSES,
        true,
        members.map((member) => member.id),
        focuses,
      ),
      industries: await getFilters(
        FirebaseTablesEnum.INDUSTRIES,
        true,
        members.map((member) => member.id),
        industries,
      ),
    },
  };
}

export default function ThankYou({ pageTitle, focuses, industries, members }) {
  const router = useRouter();
  const { focusesSelected, industriesSelected } = router.query;
  const [similarFocuses, setSimilarFocuses] = useState<Filter[]>([]);
  const [similarIndustries, setSimilarIndustries] = useState<Filter[]>([]);

  const getActiveFilters = (filters: Filter[], activeIds: string[]) => {
    return filters.filter((filter) => activeIds.includes(filter.id));
  };

  useEffect(() => {
    const updateSimilar = ({ selectedItems, allItems, setter }) => {
      if (selectedItems) {
        const queryAsArray = Array.isArray(selectedItems)
          ? selectedItems
          : [selectedItems];
        setter(() => getActiveFilters(allItems, queryAsArray));
      }
    };

    if (focusesSelected === undefined && industriesSelected === undefined)
      return;

    updateSimilar({
      selectedItems: focusesSelected,
      allItems: focuses,
      setter: setSimilarFocuses,
    });
    updateSimilar({
      selectedItems: industriesSelected,
      allItems: industries,
      setter: setSimilarIndustries,
    });
  }, [focuses, industries]);

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
          <section className="flex">
            <div className="grow">
              <Link
                href="https://hawaiiansintech.org"
                className="flex flex-col gap-2"
              >
                <Computer />
                <h3 className="text-foreground font-semibold">
                  Connect with people who share an area of focus.
                </h3>
                {similarFocuses?.map((foc) => (
                  <p>
                    {foc.count}
                    {foc.name}
                  </p>
                ))}
                {similarIndustries?.map((ind) => (
                  <p>
                    {ind.count}
                    {ind.name}
                  </p>
                ))}
              </Link>
            </div>
            <div className="flex justify-evenly gap-4 flex-col w-1/3">
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
          </section>
        </main>
      </div>
    </>
  );
}
