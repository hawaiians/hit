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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import theme from "@/styles/theme";
import { Badge } from "@/components/ui/badge";

export async function getStaticProps() {
  const { members, focuses, industries } = await getMembers();

  console.log(members);

  return {
    props: {
      pageTitle: "Thank You · Hawaiians in Technology",
      members: members,
      focuses: await getFilters(
        FirebaseTablesEnum.FOCUSES,
        false,
        undefined,
        focuses,
      ),
      industries: await getFilters(
        FirebaseTablesEnum.INDUSTRIES,
        false,
        undefined,
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
      if (!selectedItems) return;
      const queryAsArray = Array.isArray(selectedItems)
        ? selectedItems
        : [selectedItems];
      setter(() => getActiveFilters(allItems, queryAsArray));
    };
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
  }, [focuses, industries, focusesSelected, industriesSelected]);

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
          <section className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex flex-col rounded-xl bg-brown-600/10 pb-2 pt-4">
                <div className="space-y-2 px-4">
                  <Computer style={{ color: theme.color.link.base }} />
                  <h3 className="font-semibold text-foreground">
                    Connect with your kanaka peers in common.
                  </h3>
                </div>
                {(similarFocuses.length > 0 ||
                  similarIndustries.length > 0) && (
                  <Accordion type="single" collapsible>
                    {[similarFocuses, similarIndustries].map((items, i) => {
                      if (items.length === 0) return null;
                      return (
                        <div key={`${items[0].filterType}-${i}`}>
                          {items.length > 0 && (
                            <h6 className="mb-1 mt-2 px-4 text-xs font-semibold uppercase tracking-wide text-brown-600">
                              {items[0].filterType}
                            </h6>
                          )}
                          {items.map((item, itemIndex) => (
                            <AccordionItem
                              key={`filter-${itemIndex}-${item.name}`}
                              value={`filter-${itemIndex}-${item.name}`}
                              className={cn(
                                items.length === itemIndex + 1 && "border-none",
                              )}
                            >
                              <AccordionTrigger className="border-0 px-4 hover:bg-brown-600/10">
                                <div className="flex items-center">
                                  <div className="flex min-w-12">
                                    <Badge variant="ghost">{item.count}</Badge>
                                  </div>
                                  <h3 className="line-clamp-1 text-left">
                                    {item.name}
                                  </h3>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-4">
                                Placeholder
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </div>
                      );
                    })}
                  </Accordion>
                )}
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <Link
                href="https://hawaiiansintech.org/discord"
                className="flex flex-col gap-2 rounded-xl bg-brown-600/10 p-2 sm:p-4"
              >
                <MessageCircleHeart />
                <h3 className="font-semibold text-foreground">
                  Join the discussion on our Discord server.
                </h3>
                <span>→ Discord</span>
              </Link>
              <Link
                href={`${DISCORD_URL}`}
                className="flex flex-col gap-2 rounded-xl bg-brown-600/10 p-2 sm:p-4"
              >
                <Computer />
                <h3 className="font-semibold text-foreground">
                  Contribute to our projects on GitHub.
                </h3>
                <span>→ Github</span>
              </Link>
            </div>
          </section>
          <p className="text-sm tracking-wide text-secondary-foreground">
            You should have received a confirmation email from us. If you
            didn't, you may need to add{" "}
            <Code>no-reply@hawaiiansintech.org</Code> to your address book.
          </p>
        </main>
      </div>
    </>
  );
}
