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
              <Link href="#joining-our-ohana">Joining Our &lsquo;Ohana</Link>
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
            <HashAnchorTarget id="who-we-are" classNames="space-y-4">
              <h2 className="text-5xl font-semibold">Who We Are</h2>
              <p>
                We're <strong>Hawaiians in Tech, LLC</strong>, a company
                dedicated to supporting and connecting Native Hawaiians in the
                tech industry. Our mission is to{" "}
                <strong>uplift our community, not to make a profit</strong>.
                While we might sometimes need to cover costs for events or
                services, know that any funds we collect go right back into
                supporting our &lsquo;ohana in tech.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget id="our-focus" classNames="space-y-4">
              <h2 className="text-5xl font-semibold">Our Focus</h2>

              <p>
                We are led by Native Hawaiians supporting{" "}
                <strong>Native Hawaiians</strong> who are:
              </p>
              <ul className="list-inside list-disc">
                <li>Already working in tech</li>
                <li>Students looking to get into tech</li>
                <li>People of any age looking to switch careers into tech</li>
              </ul>
              <p>
                Our understanding of Native Hawaiian identity is rooted in{" "}
                <strong>
                  connection to Hawaiian heritage, culture, and the 'āina (land)
                </strong>
                . We recognize that Native Hawaiian identity is complex and
                deeply personal.
              </p>
              <p>
                We understand that people's connections to Hawaiian culture are
                multifaceted and unique. When joining our community, we invite
                you to reflect on your{" "}
                <strong>
                  mo'okūauhau (genealogy) and your personal connection to
                  Hawaiian heritage
                </strong>
                . This connection might be expressed through family histories,
                cultural practices, or your relationship with Hawaiian lands and
                communities. We honor the diverse ways our community members
                maintain their connections to their Hawaiian roots.
              </p>
              <p>
                <strong>
                  We will not question or validate anyone's claim to Native
                  Hawaiian identity.
                </strong>{" "}
                We recognize the complexity and sensitivity of indigeneity and
                trust in the sincerity of our community members. We accept your
                self-identification in good faith, acknowledging that each
                person's journey and connection to their Hawaiian heritage is
                unique and valid.
              </p>
              <h3 className="text-3xl font-semibold">Allies</h3>
              <p>
                We truly appreciate our allies and the support they provide to
                our community. While our primary mission is to nurture and
                empower Native Hawaiians in tech, we welcome allies in many of
                our community spaces, such as our Discord server.
              </p>
              <p>
                Representation on our directory is reserved for those who
                identify as Native Hawaiian, but we encourage active
                participation from allies in our broader community conversations
                and events. This approach allows us to create a unique
                environment where our Native Hawaiian &lsquo;ohana in tech can
                thrive, while also benefiting from the valuable perspectives of
                our allies.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget
              id="information-we-collect"
              classNames="space-y-2"
            >
              <h2 className="text-5xl font-semibold">What You Can Do</h2>
            </HashAnchorTarget>

            <HashAnchorTarget id="joining-our-ohana" classNames="space-y-4">
              <h3 className="text-3xl font-semibold">
                Joining Our &lsquo;Ohana
              </h3>
              <p>To join the directory shown on our homepage, you must:</p>
              <ul className="list-inside list-disc">
                <li>
                  <strong>Identify as Native Hawaiian</strong> (explained in
                  more detail above)
                </li>
                <li>
                  Provide your name, location, and details about your work in
                  technology
                </li>
                <li>
                  Consent to having public information shared on our website
                </li>
                <li>Be at least 13 years old</li>
              </ul>
              <p>
                We keep your email and contact info private unless you
                explicitly permit us to share it.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget
              id="keeping-your-info-fresh"
              classNames="space-y-4"
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

            <HashAnchorTarget
              id="being-a-good-community-member"
              classNames="space-y-4"
            >
              <h3 className="text-3xl font-semibold">
                Being a Good Community Member
              </h3>
              <p>
                We expect all our members to{" "}
                <strong>carry themselves with dignity and grace</strong> in all
                community spaces. This includes:
              </p>
              <ul className="list-inside list-disc">
                <li>In-person events</li>
                <li>Virtual calls</li>
                <li>Our Discord server</li>
                <li>Group LinkedIn profiles</li>
                <li>Any other community-sanctioned areas</li>
              </ul>
              <p>
                To ensure a positive and productive community environment, we
                ask all members to adhere to the following rules:
              </p>
              <ol className="list-inside list-decimal space-y-2">
                <li>
                  <strong>Respect and Professionalism:</strong> Treat all
                  members of the group with respect and maintain a professional
                  attitude in all interactions. Offer feedback and advice
                  constructively, maintaining a positive and supportive tone.
                  Critiques should focus on ideas, concepts, or actions rather
                  than attacking individuals personally. Avoid engaging in any
                  behavior that may be deemed offensive, discriminatory, or
                  harassing.
                </li>
                <li>
                  <strong>Confidentiality:</strong> Respect the confidentiality
                  of any sensitive information shared within the group. Do not
                  disclose or use confidential information without explicit
                  permission from the individual or organization involved.
                </li>
                <li>
                  <strong>Active Participation:</strong> Engage actively in
                  discussions, meetings, and events organized by the networking
                  group. Contribute your knowledge, expertise, and insights to
                  foster meaningful conversations and facilitate learning
                  opportunities for all members.
                </li>
                <li>
                  <strong>Collaboration and Support:</strong> Encourage
                  collaboration among members by offering support, sharing
                  resources, and providing constructive feedback whenever
                  possible. Foster an environment that promotes the growth and
                  success of all participants.
                </li>
              </ol>
              <p>
                By following these guidelines, we can create a thriving,
                supportive community that benefits all of our members and
                upholds the values of our &lsquo;ohana.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget id="leaving-the-community" classNames="space-y-4">
              <h3 className="text-3xl font-semibold">Leaving the Community</h3>
              <p>
                If you want to{" "}
                <strong>leave our community and have your info deleted</strong>,
                just let us know. You can reach out to us using the same contact
                methods mentioned above.
              </p>
            </HashAnchorTarget>
            <HashAnchorTarget
              id="information-we-collect"
              classNames="space-y-2"
            >
              <h2 className="text-5xl font-semibold">
                What We May Do to Keep the Community Safe
              </h2>
            </HashAnchorTarget>
            <HashAnchorTarget
              id="our-right-to-revoke-access"
              classNames="space-y-4"
            >
              <h3 className="text-3xl font-semibold">
                Our Right to Revoke Access
              </h3>
              <p>
                We want to keep our community positive and supportive. So, we
                reserve the right to:
              </p>
              <ul className="list-inside list-disc">
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
              <ul className="list-inside list-disc">
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
              classNames="space-y-4"
            >
              <h3 className="text-3xl font-semibold">Changes to These Terms</h3>
              <p>
                We might update these terms from time to time. We'll let you
                know when we do, but{" "}
                <strong>it's a good idea to check back occasionally</strong> to
                stay in the loop.
              </p>
            </HashAnchorTarget>

            <HashAnchorTarget id="contact-us" classNames="space-y-4">
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
