"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { PiForkKnifeFill } from "react-icons/pi";

import { NAV_LINKS } from "@/constants/nav-links";
import { cn } from "@/utils/cn";
import { isActive } from "@/utils/path-active";

const iconMap: { [key: string]: IconType } = {
  home: PiForkKnifeFill,
  profile: CgProfile,
};

export const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-[76px] shadow-bottom-bar flex-center bg-white fixed bottom-0 z-50">
      <nav className="flex container flex-between">
        {NAV_LINKS.map((nav) => {
          const IconComponent = iconMap[nav.id] || CgProfile;
          const active = isActive(pathname, nav.activePaths);

          return (
            <div key={nav.id} className="flex-center flex-1">
              <Link
                href={nav.href}
                className="cursor-pointer flex-center flex-col gap-1 text-muted-foreground"
              >
                <div
                  className={cn(
                    "flex-center gap-1 w-24 h-9 rounded-full",
                    active ? "bg-accent" : ""
                  )}
                >
                  <IconComponent
                    className={cn("text-[24px]", active && "text-primary")}
                  />
                </div>
                <span
                  className={cn(
                    "text-base",
                    active &&
                      "bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold"
                  )}
                >
                  {nav.label}
                </span>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
