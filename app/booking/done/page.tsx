"use client";

import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import lottie from "lottie-web";

import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
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
      <div className="flex flex-col max-w-80 mx-auto">
        <h1 className="text-base font-semibold text-foreground text-center">
          ຂໍ້ມູນການຈອງ
        </h1>
        <div className="py-2">
          <div className="pt-3 w-full flex flex-col gap-3 px-4">
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">ຊື່:</span>
              <span className="text-base text-foreground flex-1">
                {searchParams.get("name")}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">ຈຳນວນ:</span>
              <span className="text-base text-foreground flex-1">
                {`${searchParams.get("member")} ຄົນ`}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">
                ວັນທີ່:
              </span>
              <span className="text-base text-foreground flex-1">
                {searchParams.get("date")}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">ເວລາ:</span>
              <span className="text-base text-foreground flex-1">
                {`${searchParams.get("time")} ໂມງ`}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">
                ເງິນມັດຈຳ:
              </span>
              <span className="text-base text-foreground flex-1">
                {`${(
                  Number(searchParams.get("money")) || 0
                ).toLocaleString()} ກີບ`}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-base text-foreground min-w-24">
                ລາຍລະອຽດ:
              </span>
              <span className="text-base text-foreground flex-1">
                {`${searchParams.get("note") || ""}`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-muted-foreground text-sm mt-16 max-w-80 mx-auto leading-6">
        ລະບົບຈະສົ່ງຂໍ້ຄວາມແຈ້ງເຕືອນຜ່ານເບີ WhatsApp ຂອງທ່ານ
        ຖ້າຫາກມີຂໍ້ຜິດພາດທ່ານສາມາດຕິດຕໍ່ໄດ້ເລີຍ
      </p>
      <div className="flex-center gap-4 w-full py-6">
        <Button
          size={"lg"}
          className="px-4 py-2 max-w-80 w-full !bg-secondary text-white font-semibold rounded-lg h-12 cursor-pointer"
          onClick={() => router.push("/")}
        >
          ກັບໄປໜ້າຫຼັກ
        </Button>
      </div>
    </section>
  );
}
