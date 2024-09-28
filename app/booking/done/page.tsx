"use client";

import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { DATA } from "./data";
import { formatDate } from "@/utils/format-date";
import { Button } from "@/components/ui/button";

export default function Page({ params }: { params: { id: string } }) {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/lottie/success.json",
      });
    }
  }, []);

  return (
    <section className="container pt-4 h-full pb-44">
      <h1 className="text-center font-semibold">ສຳເລັດແລ້ວ</h1>
      <div className="w-full h-60 overflow-hidden">
        <div ref={animationContainer} className="w-full h-full scale-150"></div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-base font-semibold text-foreground text-center">
          ຂໍ້ມູນການຈອງ
        </h1>
        <div className="py-2">
          <div className="pt-3 w-full flex flex-col gap-3 px-4">
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">ຊື່:</span>
              <span className="text-base text-foreground flex-1">
                {"ສົ້ມ ສົ້ມ"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">ຈຳນວນ:</span>
              <span className="text-base text-foreground flex-1">
                {`${DATA.totalPeople} ຄົນ`}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">
                ວັນທີ່:
              </span>
              <span className="text-base text-foreground flex-1">
                {`${formatDate(DATA.date, "DD/MM/YYYY")}`}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">ເວລາ:</span>
              <span className="text-base text-foreground flex-1">
                {`${formatDate(DATA.date, "HH:mm")} ໂມງ`}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">
                ເງິນມັດຈຳ:
              </span>
              <span className="text-base text-foreground flex-1">
                {`${DATA.price.toLocaleString()} ໂມງ`}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">
                ລາຍລະອຽດ:
              </span>
              <span className="text-base text-foreground flex-1">
                {`${DATA.detail || ""}`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-muted-foreground text-sm mt-16 max-w-72 mx-auto leading-6">
        ລະບົບຈະສົ່ງຂໍ້ຄວາມແຈ້ງເຕືອນຜ່ານເບີ WhatsApp ຂອງທ່ານ
        ຖ້າຫາກມີຂໍ້ຜິດພາດທ່ານສາມາດຕິດຕໍ່ໄດ້ເລີຍ
      </p>
      <div className="grid grid-cols-2 gap-4 w-full py-6">
        <Button
          size={"lg"}
          className="px-4 py-2 !bg-[#E6DEDD] text-white font-semibold rounded-lg h-12"
        >
          ຈອງເພີ່ມ
        </Button>
        <Button
          size={"lg"}
          className="px-4 py-2 !bg-secondary text-white font-semibold rounded-lg h-12"
        >
          ສຳເລັດແລ້ວ
        </Button>
      </div>
    </section>
  );
}
