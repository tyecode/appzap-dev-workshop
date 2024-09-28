"use client";

import { BookingForm } from "@/components/forms/BookingForm";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className="container pt-4 h-full pb-44">
      <h1 className="text-center font-semibold">ຂໍ້ມູນການຈອງ</h1>
      <BookingForm />
    </section>
  );
}
