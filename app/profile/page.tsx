"use client";

import Image from "next/image";

import { FiEdit } from "react-icons/fi";

import { HistoryCard } from "@/components/HistoryCard";

import { HISTORIES } from "./data";

export default function Profile() {
  return (
    <section className="w-full">
      <div className="w-full py-4 shadow-md container flex justify-between">
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={"/appzap-logo.png"}
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-normal text-foreground">
              020 12345678
            </span>
            <span className="text-base text-foreground font-normal">
              @Som som
            </span>
          </div>
        </div>
        <FiEdit className="w-6 h-6 text-primary cursor-pointer" />
      </div>
      <div className="w-full container py-4">
        <h1 className="font-semibold text-lg text-foreground">ປະຫວັດການຈອງ</h1>
        <div className="py-6 flex flex-col gap-4">
          {HISTORIES.map((history) => (
            <HistoryCard key={history.id} data={history} />
          ))}
        </div>
      </div>
    </section>
  );
}
