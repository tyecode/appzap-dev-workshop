"use client";

import { BookingForm } from "@/components/forms/BookingForm";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api`);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="container pt-4 h-full pb-44">
      <h1 className="text-center font-semibold">ຂໍ້ມູນການຈອງ</h1>
      <BookingForm
        data={{
          storeId: params.id,
        }}
      />
    </section>
  );
}
