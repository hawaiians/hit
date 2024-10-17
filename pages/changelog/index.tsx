import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import MetaTags from "@/components/Metatags";
import Plausible from "@/components/Plausible";
import { server } from "@/config";
import {
  ExternalLink,
  GitPullRequestArrow,
  Link2,
  MoveUpRight,
} from "lucide-react";
import Nav from "@/components/Nav";

interface ChangelogEntry {
  date: string;
  title: string;
  slug: string;
  content: string; // Markdown content
  href?: string;
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
                <p className="text-gray-500">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
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
                {entry.href && (
                  <>
                    {entry.href.startsWith("https://github.com") &&
                    entry.href.includes("/pull/") ? (
                      <Link
                        href={entry.href}
                        className="mt-1 inline-flex items-center gap-1 rounded-full border-2 border-brown-600/30 px-2 py-1 text-sm font-medium text-brown-700 hover:border-brown-600/50 hover:no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitPullRequestArrow className="h-5 w-5" />
                        pull/
                        {`${entry.href.split("/").pop()}`}
                      </Link>
                    ) : (
                      <Link
                        href={entry.href}
                        className="mt-1 inline-flex items-center gap-1 rounded-full border-2 border-brown-600/30 px-2 py-1 text-sm font-medium text-brown-700 hover:border-brown-600/50 hover:no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Link2 className="h-5 w-5" />
                        Link
                      </Link>
                    )}
                  </>
                )}
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