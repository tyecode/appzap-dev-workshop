"use client";

import { useRouter } from "next/navigation";

import { BookingForm } from "@/components/forms/BookingForm";
import { formatDate } from "@/utils/format-date";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleOnSubmit = async (values: any) => {
    const formatDateTime = (
      date: Date,
      time: { hour: string; minute: string }
    ): string => {
      const formatted = formatDate(date, "YYYY-MM-DD");
      return `${formatted} ${time.hour}:${time.minute}`;
    };

    try {
      const formattedDate = formatDateTime(values.date, values.time);
      const requestBody = {
        name: values.name,
        amountMember: values.member.toString(),
        date: formattedDate,
        note: values.detail,
        options: values.options,
        money: values.money.toString(),
        storeId: params.id,
      };

      const res = await fetch(`/booking/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      router.push(
        `/booking/done?name=${values.name}&date=${formatDate(
          values.date,
          "DD/MM/YYYY"
        )}&time=${values.time.hour}:${values.time.minute}&member=${
          values.member
        }&options=${values.options}&money=${values.money}&note=${values.detail}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container pt-4 h-full pb-44">
      <h1 className="text-center font-semibold">ຂໍ້ມູນການຈອງ</h1>
      <BookingForm handleOnSubmit={handleOnSubmit} />
    </section>
  );
}
