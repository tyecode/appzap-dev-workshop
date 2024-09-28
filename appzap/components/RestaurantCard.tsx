import { API_ENDPOINT, IMAGE_ENDPOINT } from "@/constants";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { FaToriiGate } from "react-icons/fa";

interface RestaurantData {
  id: number | string;
  coverImage: string;
  profileImage: string;
  restaurantName: string;
  availableTables: number;
  totalTables: number;
  operatingHours: string;
  isActive?: boolean;
}

interface RestaurantCardProps {
  data: RestaurantData;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  data,
}: any) => {
  const {
    id,
    coverImage,
    profileImage,
    restaurantName,
    availableTables,
    totalTables,
    operatingHours,
    isActive,
  } = data;

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-custom-card">
      <div className="flex-center w-full h-[120px]">
        <Image
          src={IMAGE_ENDPOINT + data.storeDetails.image}
          alt="Restaurant"
          className="w-full h-full object-cover"
          width={480}
          height={360}
          draggable={false}
          priority
        />
      </div>
      <div className="container flex gap-2 pb-2">
        <div className="w-[60px] h-[60px] rounded-full -mt-5 border-2 border-white relative bg-white">
          <Image
            src={IMAGE_ENDPOINT + data.storeDetails.image}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
            width={100}
            height={100}
            draggable={false}
            priority
          />
          <div
            className={cn(
              "w-4 h-4 rounded-full absolute right-0 bottom-0 bg-white border-2 border-white",
              data.storeDetails.isOpen ? "bg-green-400" : "bg-gray-300"
            )}
          ></div>
        </div>
        <div className="flex w-full flex-row gap-2 flex-wrap flex-1">
          <div className="py-2 flex flex-col gap-2 flex-1 min-w-40">
            <h2 className="text-foreground text-base font-bold">
              {data.storeDetails.name}
            </h2>
            <p className="text-sm text-muted-foreground font-normal flex gap-1">
              <span className="text-primary font-semibold flex items-center gap-1.5">
                <FaToriiGate />
                ໂຕະວ່າງ {data.activeCount}
              </span>
              <span>/ {data.totalTables}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {data.storeDetails.note}
            </p>
          </div>
          <div className="w-[100px] py-4">
            {data.storeDetails.isOpen ? (
              <Link href={`/booking/${data.storeDetails._id}`}>
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
