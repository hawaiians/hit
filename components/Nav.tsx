import { Icon, IconAsset, IconColor } from "@/components/icon/icon";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useRouter } from "next/router";
import { useEffect } from "react";

export enum NavAppearance {
  ToShow = "to-show",
  ToMin = "to-min",
  ToFade = "to-fade",
}

export const generateNavUrl = (path, navAppearance: NavAppearance) =>
  `${path}?nav=${navAppearance}`;

const navLogoVariants = {
  floatLeft: { x: -40 },
  default: { x: 0 },
  fadeDefault: { x: 0, opacity: 0 },
};

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

  useEffect(() => {
    // Clear query param after page load
    if (typeof window !== "undefined" && nav) {
      window?.history?.replaceState(null, "", location.href.split("?")[0]);
    }
  }, []);

  const renderLogo = () => {
    let logo = <Logo />;
    if (!backLinkTo) return logo;

    return (
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
  };

  const renderNavItems = () => {
    if (variant !== "primary") return null;

    return (
      <>
        <Link
          className="text-base font-medium text-stone-700"
          href={generateNavUrl(`/about`, NavAppearance.ToMin)}
        >
          About
        </Link>
        <Link
          href={generateNavUrl(`/hackathon`, NavAppearance.ToMin)}
          className="font-script text-2xl"
        >
          Hackathon
        </Link>
      </>
    );
  };

  const renderActionItems = () => {
    if (variant !== "primary") return null;

    return (
      <div className="flex items-center gap-6">
        <Link
          className="text-base font-medium text-stone-700"
          href={generateNavUrl(`/edit`, NavAppearance.ToMin)}
        >
          Update Profile
        </Link>
        <Link
          className={cn(buttonVariants({ size: "sm" }), "px-4")}
          href={generateNavUrl(`/join/01-you`, NavAppearance.ToMin)}
        >
          Join Us
        </Link>
      </div>
    );
  };

  return (
    <header className="flex w-full items-center justify-between gap-8 p-4 sm:pl-8">
      <nav
        className={cn(
          "flex items-center gap-4",
          variant === "primary" && "gap-8",
        )}
      >
        {renderLogo()}
        {renderNavItems()}
      </nav>
      {children && (
        <div className="flex grow items-center gap-4">{children}</div>
      )}
      {renderActionItems()}
    </header>
  );
}
