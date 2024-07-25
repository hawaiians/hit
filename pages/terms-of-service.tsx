import { HashAnchorTarget } from "@/components/HashAnchorTarget";
import { Heading } from "@/components/Heading";
import MetaTags from "@/components/Metatags";
import Nav from "@/components/Nav";
import Pill from "@/components/Pill";
import Plausible from "@/components/Plausible";
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
        <Heading>Terms of Service</Heading>
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
                We're <strong>Hawaiians in Tech, LLC</strong>, an organization
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
                We are a collection of{" "}
                <strong>
                  Native Hawaiians supporting peer Native Hawaiians
                </strong>{" "}
                who are:
              </p>
              <ul className="list-inside list-disc">
                <li>Already working in tech</li>
                <li>Students studying technical fields</li>
                <li>People of any age looking to switch careers into tech</li>
              </ul>
            </HashAnchorTarget>
            <HashAnchorTarget id="our-focus" classNames="space-y-4">
              <h3 className="text-3xl font-semibold">On Being Hawaiian</h3>
              <p>
                Our understanding of Native Hawaiian identity is rooted in{" "}
                connection to Hawaiian heritage, culture, and the 'āina (land).
                We recognize that Native Hawaiian identity is complex and deeply
                personal.
              </p>
              <p>
                We understand that people's connections to Hawaiian culture are
                multifaceted and unique. When joining our community, we invite
                you to reflect on your mo'okūauhau (genealogy) and your personal
                connection to Hawaiian heritage. This connection might be
                expressed through family histories, cultural practices, or your
                relationship with Hawaiian lands and communities. We honor the
                diverse ways our community members maintain their connections to
                their Hawaiian roots.
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
              <h3 className="text-3xl font-semibold">
                On Supporting as an Ally
              </h3>
              <p>
                We truly appreciate our allies and the support they&rsquo;ve
                provided and continue to provide with our community. While our
                primary mission is to nurture and empower Native Hawaiians in
                tech, we welcome allies in many of our community spaces.
              </p>
              <p>
                Representation on our directory is reserved for those who
                identify as Native Hawaiian, but we encourage active
                participation from allies in our broader community conversations
                and events. This approach allows us to create a unique
                environment where our Native Hawaiian &lsquo;ohana in tech can
                thrive, while also benefiting from the valuable perspectives and
                &lsquo;ike (knowledge) of our allies.
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
              <p>To join the homepage directory, you must:</p>
              <ul className="list-inside list-disc">
                <li>Identify as Native Hawaiian</li>
                <li>
                  Provide and be willing to publicly share your name,
                  approximate location, and professional details
                </li>
                <li>Be at least 13 years old</li>
              </ul>
              <p>
                We keep your email and contact info private unless you
                explicitly give us permission to share it.
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
                You should <strong>keep your info up-to-date</strong>. You can
                edit your profile by logging in with your email. If you can't
                access your email or need help, reach out to us at [email
                address] or DM a community manager like Kekai or Kamakani.
              </p>
              <p>
                If we notice a lack of activity or that your profile hasn't been
                updated in a while, we may reach out to you to encourage you to
                update your information. This helps us ensure that our community
                remains vibrant and that the information we provide to other
                members is current and accurate.
              </p>
              <p>
                If your circumstances have changed and you're no longer able to
                actively participate in the community, please let us know. We
                can discuss options such as helping update your status or, if
                necessary, removing your profile from the active directory.
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
                We expect everyone to{" "}
                <strong>carry themselves with empathy and tact</strong> in all
                community spaces. This includes:
              </p>
              <ul className="list-inside list-disc">
                <li>In-person events</li>
                <li>Virtual calls</li>
                <li>Our Discord server / LinkedIn group</li>
                <li>Any other community-sanctioned areas</li>
              </ul>
              <p>
                To ensure a positive and productive community environment, we
                ask all members to adhere to the following rules:
              </p>
              <ol className="grid list-none grid-cols-2 gap-2 text-sm">
                <li className="rounded-lg bg-secondary p-4">
                  <strong>Respect and Professionalism:</strong> Treat all
                  members of the group with respect and maintain a professional
                  attitude in all interactions. Offer feedback and advice
                  constructively, maintaining a positive and supportive tone.
                  Critiques should focus on ideas, concepts, or actions rather
                  than attacking individuals personally. Avoid engaging in any
                  behavior that may be deemed offensive, discriminatory, or
                  harassing.
                </li>
                <li className="rounded-lg bg-secondary p-4">
                  <strong>Confidentiality:</strong> Respect the confidentiality
                  of any sensitive information shared within the group. Do not
                  disclose or use confidential information without explicit
                  permission from the individual or organization involved.
                </li>
                <li className="rounded-lg bg-secondary p-4">
                  <strong>Active Participation:</strong> Engage actively in
                  discussions, meetings, and events organized by the networking
                  group. Contribute your knowledge, expertise, and insights to
                  foster meaningful conversations and facilitate learning
                  opportunities for all members.
                </li>
                <li className="rounded-lg bg-secondary p-4">
                  <strong>Collaboration and Support:</strong> Encourage
                  collaboration among members by offering support, sharing
                  resources, and providing constructive feedback whenever
                  possible. Foster an environment that promotes the growth and
                  success of all participants.
                </li>
                <li className="rounded-lg bg-secondary p-4">
                  <strong>No Unsolicited Promotions or Spam:</strong> Refrain
                  from posting unsolicited advertisements, promotions, or spam
                  in our community spaces. If you&rsquo;re unsure if content or
                  opportunities would genuinely benefit the community, please
                  contact our community managers before sharing.
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
              <h2 className="text-5xl font-semibold">What We May Do</h2>
            </HashAnchorTarget>
            <HashAnchorTarget id="what-we-may-do" classNames="space-y-4">
              <p>As part of managing and improving our community, we may:</p>
              <ul className="list-inside list-disc">
                <li>
                  <strong>Contact you:</strong> Community managers may access to
                  your contact information and reach out for functions related
                  to Hawaiians in Tech.
                </li>
                <li>
                  <strong>Access your data:</strong> Our administrative,
                  development, and community management teams may have access to
                  your information.
                </li>
                <li>
                  <strong>Improve our services:</strong> Continuously work on
                  enhancing our platform and services to better serve our
                  community. This may involve analyzing usage patterns and
                  feedback to inform our decisions.
                </li>
                <li>
                  <strong>Organize events and initiatives:</strong> Plan and
                  execute events, both online and offline, to foster community
                  engagement and professional growth.
                </li>
                <li>
                  <strong>Collaborate with partners:</strong> Form partnerships
                  with organizations that align with our mission to provide
                  additional opportunities and resources to our members.
                </li>
              </ul>
              <p>
                In all these activities, we are committed to protecting your
                privacy and using your information responsibly. If you have any
                concerns or questions about how we handle your data, please
                don't hesitate to contact us.
              </p>
              <p>
                We do our best to abide by your contact preferences. Please let
                us know if you have better channels to reach you at,
                professionally or otherwise.
              </p>
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
                  Remove, block, and/or ban anyone who doesn't follow our
                  guidelines or policies
                </li>
                <li>Deny access to our events</li>
                <li>
                  Remove or obscure messages that violate our community
                  standards
                </li>
              </ul>

              <p>
                <strong>We&rsquo;re committed to open communication</strong>;
                we'll always strive to work through any issues before taking
                such actions. Our goal is to maintain a harmonious community,
                and we believe that most problems can be resolved through
                respectful dialogue.
              </p>
              <p>
                However, we can take these actions at any time and for any
                reason we deem necessary to maintain the integrity and positive
                spirit of our community.
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
