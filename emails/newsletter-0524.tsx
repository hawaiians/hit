import { Text, Link, Img, Container } from "@react-email/components";
import * as React from "react";
import Base from "./ui/base";
import Logo from "./ui/logo";
import Layout from "./ui/layout";

export default function Newsletter0524({
  unsubscribeUrl,
}: {
  unsubscribeUrl: string;
}) {
  return (
    <Base
      preview="Join our first community event in the Bay Area!"
      title="Welcome to Hawaiians in Tech"
      align="left"
    >
      <Layout>
        <Logo align="left" />
        <Text>
          <span className="block text-base font-semibold leading-loose sm:text-lg">
            <em>Huuui!</em> Hawaiians in Tech
          </span>
          <strong className="text-2xl font-semibold sm:text-5xl">
            May Newsletter
          </strong>
        </Text>
        <Text>Aloha e gangie,</Text>
        <Text>
          Hope everyone has been doing swell. What a ride it&rsquo;s been over
          the last few months, right? <em>ʻĀuwe.</em> Whether in a new job,
          newly without a job, or in a newly stressful job, many of us are going
          through it. Stand strong; we are here for each other. To make space
          for that, we&rsquo;re excited to announce we&rsquo;re co-hosting our
          first in-person event in the Bay Area!
        </Text>
        <Link href="https://lu.ma/ofzvwvaj">
          <Img
            src="https://tj8xrxsxqdtxeknk.public.blob.vercel-storage.com/email/pasifika%20postcard-Qqsb3Z578u3UXtzGx05GxFL12L6ZSH.jpg"
            alt="Flyer"
            className="h-auto w-full rounded"
          />
        </Link>
        <Text>
          You&rsquo;re invited to the inaugural{" "}
          <strong>Pasifika in Tech Bay Area Happy Hour</strong>! Join us to
          celebrate and connect with our vibrant Polynesian, Melanesian, &
          Micronesian tech community in the Bay Area.
        </Text>
        <Text className="my-1">
          <strong>Save the date:</strong> Wednesday, May 29th
        </Text>
        <Text className="my-1">
          <strong>Time:</strong> 5:30–8PM
        </Text>
        <Text className="my-1">
          <strong>Location:</strong> Twitch HQ (
          <Link
            className="text-brown-600"
            href="https://maps.app.goo.gl/anb6ZbxZpMwXffwn6"
          >
            map
          </Link>
          )
        </Text>
        <Text className="my-1">
          <strong>What to expect:</strong>
        </Text>
        <ul className="mt-0 text-sm">
          <li className="mb-1">Network with Pasifika techies and allies</li>
          <li className="my-1">Enjoy Pasifika music, food & drinks</li>
          <li className="mt-1">
            Fun activities being planned including a lei-making workshop and,
            yes since this is Twitch, free arcade access with games like Killer
            Queen and pinball
          </li>
        </ul>
        <Text className="mb-2 text-center">
          Space is limited. Let us know you&rsquo;re coming!
        </Text>
        <Link
          href="https://lu.ma/ofzvwvaj"
          className="block rounded bg-stone-800 px-2.5 py-2 text-center font-bold tracking-wide text-white"
        >
          RSVP{" "}
          <Text className="mb-0 mt-1 text-center text-xs font-semibold text-stone-300">
            May 29th 5:30–8PM @ Twitch HQ
          </Text>
        </Link>
        <div className="mb-8 mt-4 sm:px-4">
          <Img
            className="w-full"
            src="https://tj8xrxsxqdtxeknk.public.blob.vercel-storage.com/email/pasifika%20orgs-9izCj4uKUVq7xr1It0nwZF0L17abk0.png"
          />
        </div>
        <div className="rounded bg-stone-100 p-2 text-center sm:p-4">
          <Text className="mb-2 mt-0 text-xs font-bold">
            Then,{" "}
            <Link href="https://lu.ma/ofzvwvaj" className="text-brown-600">
              share the RSVP
            </Link>{" "}
            with your Pasifika friends and colleagues
          </Text>
          <Link href="https://tj8xrxsxqdtxeknk.public.blob.vercel-storage.com/email/pasifika%20flyer-N4j5yIwk22Hb15ESQdYKzHq6LH6K9t.jpg">
            <Img
              className="mr-4 inline-block w-1/3 rounded"
              src="https://tj8xrxsxqdtxeknk.public.blob.vercel-storage.com/email/pasifika%20flyer-N4j5yIwk22Hb15ESQdYKzHq6LH6K9t.jpg"
            />
          </Link>
          <Link href="https://tj8xrxsxqdtxeknk.public.blob.vercel-storage.com/email/pasifika%20postcard-Qqsb3Z578u3UXtzGx05GxFL12L6ZSH.jpg">
            <Img
              className="inline-block w-1/3 rounded"
              src="https://tj8xrxsxqdtxeknk.public.blob.vercel-storage.com/email/pasifika%20postcard-Qqsb3Z578u3UXtzGx05GxFL12L6ZSH.jpg"
            />
          </Link>
          <Text className="mb-0 mt-2 text-xs leading-normal text-stone-500">
            Feel free to spruce up social posts with either of the full-res
            graphics made specifically for the event.
          </Text>
        </div>
        <Text>
          Mahalo to everyone for their kōkua and generous support in making this
          event happen! Stoked to have collaborated with plenty folks including,
          but not limited to, friends from Amazon&rsquo;s Pasifika Indigenous@,
          Hawaiians in Tech, Google Pasifika Peoples Collective, and Apple. E
          paʻi ka lima kākou!
        </Text>
        <Text className="m-0">E mālama,</Text>
        <Text className="m-0">Taylor Kekai Ho</Text>
        <Text className="m-0">Hawaiians in Tech</Text>
      </Layout>
      <Container className="my-4 text-center text-stone-500">
        <Link href={`${unsubscribeUrl}`} className="text-xs text-inherit">
          Unsubscribe
        </Link>
        <span className="mx-2">·</span>
        <Link
          href="https://hawaiiansintech.org/about?utm_source=confirmation-email-footer"
          className="text-xs text-inherit"
        >
          About
        </Link>
        <span className="mx-2">·</span>
        <Link
          href="https://hawaiiansintech.org/privacy-policy?utm_source=confirmation-email-footer"
          className="text-xs text-inherit"
        >
          Privacy Policy
        </Link>
        <Text>
          200 N Vineyard Blvd A325 - 5374
          <br />
          Honolulu, HI 96817
        </Text>
      </Container>
    </Base>
  );
}
