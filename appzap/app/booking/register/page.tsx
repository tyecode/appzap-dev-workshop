"use client";

import { PhoneForm } from "@/components/forms/PhoneForm";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className="container pt-4 h-full pb-44">
      <h1 className="text-center font-semibold">
        ປ້ອນເບີໂທຂອງທ່ານເພີ່ມຈອງຮ້ານ
      </h1>
      <PhoneForm />
    </section>
  );
}
