"use client";

import Image from "next/image";

import { RestaurantCard } from "@/components/common/RestaurantCard";
import { RestaurantCardSkeleton } from "@/components/skeletons/RestaurantCardSkeleton";

import { useFetchRestaurants } from "@/hooks/useFetchRestaurants";

export default function Home() {
  const { data, loading } = useFetchRestaurants();

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
        {loading ? (
          [...Array(5)].map((_, index) => (
            <RestaurantCardSkeleton key={index} />
          ))
        ) : data.length > 0 ? (
          data.map((restaurant: any, index: number) => (
            <RestaurantCard
              key={index}
              data={{
                id: restaurant.storeDetails._id,
                name: restaurant.storeDetails.name,
                image: restaurant.storeDetails.image,
                isOpen: restaurant.storeDetails.isOpen,
                note: restaurant.storeDetails.note,
                totalTables: restaurant.totalTables,
                activeCount: restaurant.activeCount,
              }}
              isNotAvailable={
                restaurant.activeCount < restaurant.totalTables ? false : true
              }
            />
          ))
        ) : (
          <div className="w-full flex-center py-4">
            <span className="text-muted-foreground my-20">
              ບໍ່ມີລາຍການຮ້ານອາຫານ
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
