import React from "react";
import Link from "next/link";
import { GitPullRequestArrow, Link2, Linkedin } from "lucide-react";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

interface ChangelogLinksProps {
  links: string[];
}

const ChangelogLinks: React.FC<ChangelogLinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <React.Fragment key={`changelog-link-${index}`}>
          {link.startsWith("https://github.com") && link.includes("/pull/") ? (
            <Link
              href={link}
              className="mt-1 inline-flex items-center gap-1 rounded-full border-2 border-brown-600/30 px-2 py-1 text-sm font-medium text-brown-700 hover:border-brown-600/50 hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitPullRequestArrow className="h-5 w-5" />
              {link.split("/").pop()}
            </Link>
          ) : link.startsWith("https://www.linkedin.com") ? (
            <Link
              href={link}
              className="mt-1 inline-flex items-center gap-1 rounded-full border-2 border-brown-600/30 px-2 py-1 text-sm font-medium text-brown-700 hover:border-brown-600/50 hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
              Post
            </Link>
          ) : (
            <Link
              href={link}
              className="mt-1 inline-flex items-center gap-1 rounded-full border-2 border-brown-600/30 px-2 py-1 text-sm font-medium text-brown-700 hover:border-brown-600/50 hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link2 className="h-5 w-5" />
              Link
            </Link>
          )}
          {index < links.length - 1 && " "}
        </React.Fragment>
      ))}
    </>
  );
};

export default ChangelogLinks;
