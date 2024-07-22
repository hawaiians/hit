import { StaggerText } from "@/components/animation/StraggerText";
import { HashAnchorTarget } from "@/components/HashAnchorTarget";
import { Heading } from "@/components/Heading";
import MetaTags from "@/components/Metatags";
import Nav from "@/components/Nav";
import Pill from "@/components/Pill";
import Plausible from "@/components/Plausible";
import { generateAdminMailToLink } from "@/lib/email/utils";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "Terms of Service · Hawaiians in Technology",
    },
  };
}

export default function PrivacyPolicy({ pageTitle }) {
  return (
    <>
      <Head>
        <Plausible />
        <MetaTags title={pageTitle} />
        <title>{pageTitle}</title>
      </Head>
      <Nav backUrl="/" />
      <section className="mx-auto max-w-4xl px-4">
        <Heading>Privacy Policy</Heading>
        <StaggerText
          words={[
            "Your",
            "privacy",
            "is",
            "important",
            "to",
            "us.",
            "🤙🏼",
            "🤙🏽",
            "🤙🏾",
          ]}
          classNames="mx-auto max-w-2xl flex flex-wrap py-4 text-center gap-1.5 text-4xl sm:gap-4 sm:pt-8 sm:pb-16 sm:text-left sm:text-8xl"
        />
        <p>
          Aloha! Welcome to the Hawaiians in Tech community. We're stoked to
          have you here. This Terms of Service (ToS) outlines how our community
          works and what we expect from our members. We've tried to keep it
          simple and straightforward, but if you have any questions, just give
          us a shout.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 text-xl sm:my-12 sm:flex sm:space-x-16 sm:px-8">
        <aside className="sm:sticky sm:top-8 sm:shrink-0 sm:self-start">
          <ul className="space-y-1 py-4 font-medium">
            <li>
              <Link href="#who-we-are" className="text-xl font-bold">
                Who We Are
              </Link>
            </li>
            <li className="pl-4">
              <Link href="#joining-our-ohana">Joining Our Ohana</Link>
            </li>
            <li className="pl-4">
              <Link href="#our-focus">Our Focus</Link>
            </li>
            <li className="pl-4">
              <Link href="#keeping-your-info-fresh">
                Keeping Your Info Fresh
              </Link>
            </li>
            <li className="pl-4">
              <Link href="#leaving-the-community">Leaving the Community</Link>
            </li>
            <li className="pl-4">
              <Link href="#being-a-good-community-member">
                Being a Good Community Member
              </Link>
            </li>
            <li className="pl-4">
              <Link href="#our-right-to-revoke-access">
                Our Right to Revoke Access
              </Link>
            </li>
            <li className="pl-4">
              <Link href="#changes-to-these-terms">Changes to These Terms</Link>
            </li>
            <li className="pl-4">
              <Link href="#contact-us">Contact Us</Link>
            </li>
            <li>
              <p className="flex items-center gap-1 py-4 text-sm font-medium text-stone-800">
                Last updated{" "}
                <span className="inline-flex">
                  <Pill>[Current Date]</Pill>
                </span>
              </p>
            </li>
          </ul>
        </aside>
        <main className="space-y-8">
          <article className="space-y-4">
            <HashAnchorTarget id="who-we-are" classNames="space-y-2">
              <h2 className="text-5xl font-semibold">Who We Are</h2>
            </HashAnchorTarget>
            <p>
              We're <strong>Hawaiians in Tech, LLC</strong>, a company dedicated
              to supporting and connecting Native Hawaiians in the tech
              industry. Our mission is to{" "}
              <strong>uplift our community, not to make a profit</strong>. While
              we might sometimes need to cover costs for events or services,
              know that any funds we collect go right back into supporting our
              ohana in tech.
            </p>

            <HashAnchorTarget id="joining-our-ohana" classNames="space-y-2">
              <h3 className="text-3xl font-semibold">Joining Our Ohana</h3>
              <p>
                To join our community, you'll need to sign up on our website.
                Here's what you need to know:
              </p>
              <ul>
                <li>
                  We'll ask for some info about you, like your name, location,
                  and work experience.
                </li>
                <li>
                  We might ask for more info later to keep your profile
                  up-to-date.
                </li>
                <li>
                  Most of this info might be shared on our website, either
                  publicly or privately.
                </li>
                <li>
                  We keep your email and contact info private unless you tell us
                  it's okay to share.
                </li>
                <li>
                  <strong>You need to be at least 13 years old to join.</strong>
                </li>
              </ul>
            </HashAnchorTarget>

            <HashAnchorTarget id="our-focus" classNames="space-y-2">
              <h3 className="text-3xl font-semibold">Our Focus</h3>
              <p>We're all about supporting Native Hawaiians who are:</p>
              <ul>
                <li>Already working in tech</li>
                <li>Students looking to get into tech</li>
                <li>People of any age looking to switch careers into tech</li>
              </ul>
              <p>
                Our definition of Native Hawaiian is rooted in{" "}
                <strong>
                  indigenous identity and connection to the 'aina (land)
                </strong>
                . We recognize that Native Hawaiian identity is complex and that
                many kanaka have mixed heritage. For our purposes, a Native
                Hawaiian is someone who has{" "}
                <strong>
                  ancestral ties to the indigenous people of Hawai'i, regardless
                  of blood quantum
                </strong>
                .
              </p>
              <p>
                We understand that people's contributions and connections to
                Hawaiian culture are multifaceted. We don't seek to question or
                validate anyone's indigeneity. If you join our community stating
                your{" "}
                <strong>mo'okūauhau (genealogy) and connection to 'aina</strong>
                , we accept this in good faith.
              </p>
              <p>
                We truly appreciate our allies and the support they provide to
                our community. While our primary mission is to nurture and
                empower Native Hawaiians in tech, we welcome allies in many of
                our community spaces, such as our Discord server.{" "}
                <strong>
                  Representation on our directory is reserved for those who
                  identify as Native Hawaiian
                </strong>
                , but we encourage active participation from allies in our
                broader community conversations and events. This approach allows
                us to create a unique environment where our Native Hawaiian
                ohana in tech can thrive, while also benefiting from the
                valuable perspectives of our allies.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget
              id="keeping-your-info-fresh"
              classNames="space-y-2"
            >
              <h3 className="text-3xl font-semibold">
                Keeping Your Info Fresh
              </h3>
              <p>
                We encourage you to <strong>keep your info up-to-date</strong>.
                You can edit your profile by logging in with your email. If you
                can't access your email or need help, reach out to us at [email
                address] or DM a community manager like Kekai or Kamakani.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget id="leaving-the-community" classNames="space-y-2">
              <h3 className="text-3xl font-semibold">Leaving the Community</h3>
              <p>
                If you want to{" "}
                <strong>leave our community and have your info deleted</strong>,
                just let us know. You can reach out to us using the same contact
                methods mentioned above.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget
              id="being-a-good-community-member"
              classNames="space-y-2"
            >
              <h3 className="text-3xl font-semibold">
                Being a Good Community Member
              </h3>
              <p>
                We expect all our members to{" "}
                <strong>carry themselves with dignity and grace</strong> in all
                community spaces. This includes:
              </p>
              <ul>
                <li>In-person events</li>
                <li>Virtual calls</li>
                <li>Our Discord server</li>
                <li>Group LinkedIn profiles</li>
                <li>Any other community-sanctioned areas</li>
              </ul>
            </HashAnchorTarget>

            <HashAnchorTarget
              id="our-right-to-revoke-access"
              classNames="space-y-2"
            >
              <h3 className="text-3xl font-semibold">
                Our Right to Revoke Access
              </h3>
              <p>
                We want to keep our community positive and supportive. So, we
                reserve the right to:
              </p>
              <ul>
                <li>
                  Remove anyone who doesn't follow our guidelines or policies
                </li>
                <li>Stop communicating with or inviting certain individuals</li>
                <li>Deny access to our events</li>
                <li>
                  <strong>
                    In extreme cases, remove messages that violate our community
                    standards
                  </strong>
                </li>
              </ul>
              <p>
                This removal or revocation of access may include, but is not
                limited to:
              </p>
              <ul>
                <li>Our website</li>
                <li>Our Discord server</li>
                <li>Our LinkedIn groups</li>
                <li>
                  Any other platforms we use to host or administer the community
                </li>
              </ul>
              <p>
                We can take these actions at any time and for any reason we deem
                necessary to maintain the integrity and positive spirit of our
                community. However,{" "}
                <strong>we're committed to open communication</strong>. We'll
                always strive to work together and communicate through any
                issues before taking such actions. Our goal is to maintain a
                harmonious community, and we believe that most problems can be
                resolved through respectful dialogue.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget
              id="changes-to-these-terms"
              classNames="space-y-2"
            >
              <h3 className="text-3xl font-semibold">Changes to These Terms</h3>
              <p>
                We might update these terms from time to time. We'll let you
                know when we do, but{" "}
                <strong>it's a good idea to check back occasionally</strong> to
                stay in the loop.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget id="contact-us" classNames="space-y-2">
              <h3 className="text-3xl font-semibold">Contact Us</h3>
              <p>
                Got questions? We're here to help. Reach out to us at{" "}
                <strong>[email address]</strong> or DM one of our community
                managers.
              </p>
            </HashAnchorTarget>
          </article>
        </main>
      </section>
    </>
  );
}
