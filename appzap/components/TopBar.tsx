"use client";

import { useState } from "react";
import Image from "next/image";

import { IoSearch } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";

import { SearchPage } from "./SearchPage";
import { LanguageSelectModal } from "./modals/LanguageSelectModal";

export const TopBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isLanguageSelectModalOpen, setIsLanguageSelectModalOpen] =
    useState<boolean>(false);

  return (
    <header className="w-full h-[76px] bg-gradient-to-r from-secondary to-primary flex-center fixed top-0 z-50">
      <div className="flex container flex-between">
        <div className="flex-center rounded-full overflow-hidden border-2 border-white w-12 h-12">
          <Image
            src="/appzap-logo.png"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
        </div>
        <span className="text-white text-xl font-fugaz uppercase tracking-wide">
          Appzap
        </span>
        <div className="flex-center gap-4">
          <IoSearch
            className="text-white text-3xl cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          />
          <SlGlobe
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsLanguageSelectModalOpen(true)}
          />
        </div>
      </div>
      <SearchPage
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <LanguageSelectModal
        isOpen={isLanguageSelectModalOpen}
        onClose={() => setIsLanguageSelectModalOpen(false)}
      />
    </header>
  );
};
