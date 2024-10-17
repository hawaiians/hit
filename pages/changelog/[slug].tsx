import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";

interface ChangelogEntry {
  date: string;
  title: string;
  slug: string;
  content: string;
}

const ChangelogEntry: React.FC<ChangelogEntry> = ({ date, title, content }) => {
  return (
    <>
      <Head>
        <title>{title} | Changelog | Mobbin</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <p className="text-sm text-gray-500">{date}</p>
        <h1 className="mb-8 text-4xl font-bold">{title}</h1>
        <div className="prose max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/changelog.json");
  const entries = await res.json();

  const paths = entries.map((entry: ChangelogEntry) => ({
    params: { slug: entry.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/changelog.json");
  const entries = await res.json();
  const entry = entries.find((e: ChangelogEntry) => e.slug === params?.slug);

  if (!entry) {
    return { notFound: true };
  }

  return { props: entry };
};

export default ChangelogEntry;
