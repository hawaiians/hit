import { Icon, IconAsset, IconColor } from "@/components/icon/icon";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useRouter } from "next/router";

export enum NavAppearance {
  ToShow = "to-show",
  ToMin = "to-min",
  ToFade = "to-fade",
}

interface NavProps {
  backLinkTo?: string;
  children?: React.ReactNode;
  variant?: "primary" | "minimized";
}

export default function Nav({
  backLinkTo,
  children,
  variant = "primary",
}: NavProps) {
  const router = useRouter();
  const { nav } = router.query;

  const navLogoVariants = {
    floatLeft: { x: -40 },
    default: { x: 0 },
    fadeDefault: { x: 0, opacity: 0 },
  };

  let logo = <Logo />;

  if (backLinkTo) {
    logo = (
      <>
        <Link href={backLinkTo} shallow={true}>
          <div className="transition-transform hover:scale-105 active:scale-95">
            <Icon asset={IconAsset.CaretLeft} color={IconColor.Inherit} />
          </div>
        </Link>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={
            nav === NavAppearance.ToFade
              ? navLogoVariants.fadeDefault
              : navLogoVariants.default
          }
          initial={
            nav === NavAppearance.ToMin || nav === NavAppearance.ToFade
              ? navLogoVariants.floatLeft
              : navLogoVariants.default
          }
          href="/"
        >
          {logo}
        </motion.a>
      </>
    );
  }
  return (
    <header className="flex w-full items-center justify-between gap-8 p-4 sm:pl-8">
      <nav
        className={cn(
          "flex items-center gap-4",
          variant === "primary" && "gap-8",
        )}
      >
        {logo}
        {variant === "primary" && (
          <>
            <Link
              className="text-base font-medium text-stone-700"
              href={`/about?nav=${NavAppearance.ToMin}`}
            >
              About
            </Link>
            <Link
              href={`/hackathon?nav=${NavAppearance.ToMin}`}
              className="font-script text-2xl"
            >
              Hackathon
            </Link>
          </>
        )}
      </nav>
      {children ? (
        <div className="flex grow items-center gap-4">{children}</div>
      ) : null}
      {variant === "primary" && (
        <>
          <div className="flex items-center gap-6">
            <Link
              className="text-base font-medium text-stone-700"
              href={`/edit?nav=${NavAppearance.ToMin}`}
            >
              Update Profile
            </Link>
            <Link
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
              href={`/join/01-you?nav=${NavAppearance.ToMin}`}
            >
              Join Us
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
