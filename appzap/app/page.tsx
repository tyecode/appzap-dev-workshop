"use client";

import { RestaurantCard } from "@/components/RestaurantCard";

import { RESTAURANTS } from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container pt-2 pb-6">
      <div className="w-full h-28 rounded-lg overflow-hidden flex-center">
        <Image
          src="/banner.png"
          alt="banner"
          width={500}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-base text-muted-foreground py-2">ລາຍການຮ້ານອາຫານ</h1>
      <div className="flex flex-col gap-4">
        {RESTAURANTS.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </section>
  );
}
