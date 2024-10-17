import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

interface ChangelogEntry {
  date: string;
  title: string;
  slug: string;
  content: string; // Markdown content
}

interface ChangelogIndexProps {
  entries: ChangelogEntry[];
}

const ChangelogIndex: React.FC<ChangelogIndexProps> = ({ entries }) => {
  return (
    <>
      <Head>
        <title>Changelog | Mobbin</title>
        <meta
          name="description"
          content="Latest updates and improvements to Mobbin"
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold">Changelog</h1>
        <ul className="space-y-6">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <p className="text-sm text-gray-500">{entry.date}</p>
              <Link href={`/changelog/${entry.slug}`}>{entry.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/changelog.json");
  const entries = await res.json();

  return {
    props: {
      entries,
    },
  };
};

export default ChangelogIndex;
