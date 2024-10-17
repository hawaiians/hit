import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import MetaTags from "@/components/Metatags";
import Plausible from "@/components/Plausible";
import { server } from "@/config";

interface ChangelogEntry {
  date: string;
  title: string;
  slug: string;
  content: string; // Markdown content
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
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold">Changelog</h1>
        <ul className="grid gap-6">
          {entries.map((entry) => (
            <li key={entry.slug} className="grid grid-cols-[0.25fr_1fr] gap-4">
              <div>
                <p className="text-gray-500">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <Link
                  className="text-2xl font-semibold text-foreground"
                  href={`/changelog/${entry.slug}`}
                >
                  {entry.title}
                </Link>
                <ReactMarkdown className="prose mt-2">
                  {entry.content}
                </ReactMarkdown>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // TODO: Fetch the changelog from the API
  const res = await fetch(`${server}/changelog.json`);
  const entries = await res.json();

  return {
    props: {
      entries,
    },
  };
};

export default ChangelogIndex;
