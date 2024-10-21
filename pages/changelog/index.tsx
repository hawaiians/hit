import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import MetaTags from "@/components/Metatags";
import Plausible from "@/components/Plausible";
import { server } from "@/config";
import Nav from "@/components/Nav";
import ChangelogLinks from "@/components/ChangelogLinks";
import { formatDate } from "@/helpers";

interface ChangelogEntry {
  date: string;
  title: string;
  slug: string;
  content: string; // Markdown content
  href?: string[];
  imageURL?: string;
}

interface ChangelogIndexProps {
  entries: ChangelogEntry[];
  pageTitle: string;
}

const ChangelogIndex: React.FC<ChangelogIndexProps> = ({
  entries,
  pageTitle = "Changelog · Hawaiians in Technology",
}) => {
  return (
    <>
      <Head>
        <Plausible />
        <MetaTags title={pageTitle} />
        <title>{pageTitle}</title>
      </Head>
      <Nav backLinkTo="/" variant="minimized" />
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold">Changelog</h1>
        <ul className="grid gap-6">
          {entries.map((entry) => (
            <li key={entry.slug} className="grid grid-cols-[0.25fr_1fr] gap-4">
              <div>
                <p className="sticky top-4 text-lg text-muted-foreground">
                  {formatDate(entry.date)}
                </p>
              </div>
              <div>
                {entry.imageURL && (
                  <Image
                    src={`${entry.imageURL}`}
                    alt=""
                    height={960}
                    width={540}
                    className="mb-4 w-full rounded-lg border"
                  />
                )}
                <Link
                  className="text-2xl font-semibold text-foreground"
                  href={`/changelog/${entry.slug}`}
                >
                  {entry.title}
                </Link>
                <ReactMarkdown className="prose mt-2">
                  {entry.content}
                </ReactMarkdown>
                {entry.href && <ChangelogLinks links={entry.href} />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/changelog.json`);
  const entries = await res.json();

  return {
    props: {
      entries,
    },
  };
};

export default ChangelogIndex;
