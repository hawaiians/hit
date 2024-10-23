import React, { useState } from "react";
import Link from "next/link";
import {
  BookCheck,
  Calendar,
  Check,
  CheckCheck,
  CheckCheckIcon,
  CheckCircle2Icon,
  GitPullRequestArrow,
  Link2,
  Linkedin,
} from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

interface ChangelogLinksProps {
  links: string[];
}

{
  /* <ul>
      {links.map((link, index) => (
        <li
          className="mt-1 inline-flex items-center gap-1 rounded-full border-2 border-brown-600/30 px-2 py-1 text-sm font-medium text-brown-700 hover:border-brown-600/50 hover:no-underline"
          key={`changelog-link-${index}`}
        >
          {link.startsWith("https://github.com") && link.includes("/pull/") ? (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <GitPullRequestArrow className="h-5 w-5" />
              {link.split("/").pop()}
            </Link>
          ) : link.includes("linkedin.com") ? (
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
        </li>
      ))}
    </ul> */
}

const ChangelogLinks: React.FC<ChangelogLinksProps> = ({ links }) => {
  const [showAll, setShowAll] = useState(false);

  if (links.length < 1) return <></>;

  const displayedLinks = showAll ? links : links.slice(0, 4);

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {displayedLinks.map((link, index) => (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 bg-tan-300/50 p-2 text-sm font-medium text-foreground hover:no-underline"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="rounded-full border p-2 text-secondary-foreground">
                {link.includes("github.com") && (
                  <GitPullRequestArrow className="h-5 w-5" />
                )}
                {link.includes("linkedin.com") && (
                  <LinkedInLogoIcon className="h-5 w-5" />
                )}
                {(link.includes("meetup.com") ||
                  link.includes("hawaiiansintech.org/hackathon")) && (
                  <Calendar className="h-5 w-5" />
                )}
              </div>
              <div>
                {link.includes("github.com") && (
                  <>
                    <h3>Pull Request #{link.split("/").pop()}</h3>
                    <span className="flex items-center gap-1 text-xs text-secondary-foreground">
                      <GitHubLogoIcon className="size-3" />
                      {link.includes("/pull/") &&
                        `${link.split("/")[3]}/${link.split("/")[4]}`}
                    </span>
                  </>
                )}
                {link.includes("linkedin.com") && (
                  <>
                    <h3>Community Post</h3>
                    <div className="whitespace-nowrap text-xs text-secondary-foreground">
                      /{link.split("/")[4]}
                    </div>
                  </>
                )}
                {link.includes("meetup.com") && (
                  <>
                    <h3>Event Page</h3>
                    <div className="text-xs text-secondary-foreground">
                      Meetup
                    </div>
                  </>
                )}
                {link.includes("hawaiiansintech.org/hackathon") && (
                  <>
                    <h3>Event Page</h3>
                    <div className="text-xs text-secondary-foreground">
                      Hawaiians in Tech
                    </div>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
        {!showAll && links.length > 4 && (
          <Button
            variant="outline"
            size="sm"
            className="col-span-2"
            onClick={() => setShowAll(true)}
          >
            Load More
          </Button>
        )}
      </div>
    </>
  );
};

export default ChangelogLinks;
