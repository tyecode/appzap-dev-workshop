"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

import { formatDate } from "@/utils/format-date";
import { HistoryProps } from "@/types/History";

import { HistoryDetailModal } from "@/components/modals/HistoryDetailModal";

export const HistoryCard: React.FC<{ data: HistoryProps }> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const formattedDate = formatDate(data.date, "DD/MM/YYYY HH:mm");

  return (
    <>
      <div
        className="w-full shadow-custom-card rounded-xl p-3 flex cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 font-semibold text-foreground text-base">
            <div className="w-11 h-11 rounded-full overflow-hidden">
              {data.image && (
                <Image
                  src={data.image}
                  width={60}
                  height={60}
                  className="w-full h-full object-cover"
                  alt=""
                />
              )}
            </div>
            <span>{data.name}</span>
          </div>
          <div className="pt-3 flex justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-500">{`ຈຳນວນ: ${data.totalPeople} ຄົນ`}</span>
              <span className="text-primary text-lg font-semibold">
                {`${data.price.toLocaleString()} ກີບ`}
              </span>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <div className="text-xs px-3 py-1 bg-[#17C96429] rounded-full text-[#17C964] font-semibold w-fit">
                {data.status === "DONE" ? "ສຳເລັດ" : "ຍັງບໍ່ສຳເລັດ"}
              </div>
              <span className="text-sm text-gray-500">{`${formattedDate} ໂມງ`}</span>
            </div>
          </div>
        </div>
        <div className="w-8 flex items-center justify-end">
          <FiChevronRight className="text-3xl text-gray-300 -mr-2" />
        </div>
      </div>
      {isModalOpen && (
        <HistoryDetailModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          data={data}
        />
      )}
    </>
  );
};
