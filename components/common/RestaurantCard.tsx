import Image from "next/image";
import Link from "next/link";
import { FaToriiGate } from "react-icons/fa";

import { IMAGE_ENDPOINT } from "@/constants";
import { cn } from "@/utils/cn";

interface RestaurantCardProps {
  data: {
    id: string;
    name: string;
    image: string;
    note: string;
    totalTables: number;
    activeCount: number;
    isOpen: boolean;
  };
  isNotAvailable?: boolean;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  data,
  isNotAvailable,
}) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-custom-card">
      <div className="flex-center w-full h-[120px]">
        {data.image ? (
          <Image
            src={`${IMAGE_ENDPOINT}/${data.image}`}
            alt="Restaurant"
            className="w-full h-full object-cover"
            width={480}
            height={360}
            draggable={false}
            priority
          />
        ) : (
          <Image
            src={`/images/placeholder-600x400.svg`}
            alt=""
            className="w-full h-full object-cover"
            width={480}
            height={360}
            draggable={false}
            priority
          />
        )}
      </div>
      <div className="container flex gap-2 pb-2">
        <div className="w-[60px] h-[60px] rounded-full -mt-5 border-2 border-white relative bg-white">
          {data.image ? (
            <Image
              src={`${IMAGE_ENDPOINT}/${data.image}`}
              alt="Restaurant"
              className="w-full h-full object-cover rounded-full"
              width={480}
              height={360}
              draggable={false}
              priority
            />
          ) : (
            <Image
              src={`/images/placeholder-60x60.svg`}
              alt=""
              className="w-full h-full object-cover rounded-full"
              width={480}
              height={360}
              draggable={false}
              priority
            />
          )}
          <div
            className={cn(
              "w-4 h-4 rounded-full absolute right-0 bottom-0 bg-white border-2 border-white",
              data.isOpen ? "bg-green-400" : "bg-gray-300"
            )}
          ></div>
        </div>
        <div className="flex w-full flex-row gap-2 flex-wrap flex-1">
          <div className="py-2 flex flex-col gap-2 flex-1 min-w-40">
            <h2 className="text-foreground text-base font-bold">{data.name}</h2>
            <p className="text-sm text-muted-foreground font-normal flex gap-1">
              <span className="text-primary font-semibold flex items-center gap-1.5">
                <FaToriiGate />
                ໂຕະວ່າງ {data.activeCount}
              </span>
              <span>/ {data.totalTables}</span>
            </p>
            <p className="text-xs text-muted-foreground">{data.note}</p>
          </div>
          <div className="w-[100px] py-4">
            {isNotAvailable ? (
              <button
                disabled
                className="w-full h-10 border rounded-lg border-gray-200 flex-center text-muted-foreground text-base shadow-sm"
              >
                ໂຕະບໍ່ວ່າງ
              </button>
            ) : data.isOpen ? (
              <Link href={`/booking/${data.id}`}>
                <button className="w-full h-10 border rounded-lg border-primary flex-center text-primary text-base shadow-sm">
                  ຈອງໂຕະ
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="w-full h-10 border rounded-lg border-gray-200 flex-center text-muted-foreground text-base shadow-sm"
              >
                ຮ້ານຍັງບໍ່ເປີດ
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
