"use client";

import { RestaurantCard } from "@/components/RestaurantCard";

import { RESTAURANTS } from "./data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  console.log(data);

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
        {data.map((restaurant: any, index: number) => (
          <RestaurantCard key={index} data={restaurant} />
        ))}
      </div>
    </section>
  );
}
