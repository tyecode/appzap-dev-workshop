"use client";

import { BookingForm } from "@/components/forms/BookingForm";
import { OTPForm } from "@/components/forms/OTP";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <section className="container pt-4 h-full pb-44">
      <h1 className="text-center font-semibold">ຢືນຢັນ OTP</h1>
      <p className="text-center text-sm py-2 text-muted-foreground">
        <span>ລະຫັດ OTP ຈະສົ່ງໃຫ້ທ່ານ ຜ່ານເບີ WhatsApp</span>
        <span className="text-blue-400">{` +856 20 ${params.id.slice(
          0,
          4
        )} ${params.id.slice(4, 8)}`}</span>
      </p>
      <OTPForm />
    </section>
  );
}
