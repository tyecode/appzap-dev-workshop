"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HistoryProps } from "@/types/History";
import { formatDate } from "@/utils/format-date";
import { Button } from "../ui/button";

interface HistoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: HistoryProps;
}

export const HistoryDetailModal: React.FC<HistoryDetailModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            className="fixed inset-0 bg-black opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => handleClose()}
          ></motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg z-10 max-w-[380px] w-full m-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h1 className="text-base font-semibold text-foreground text-center">
                ຂໍ້ມູນການຈອງ
              </h1>
              <div className="py-2">
                <div className="pt-3 w-full flex flex-col gap-3 px-4">
                  <div className="flex items-center">
                    <span className="text-base text-foreground min-w-24">
                      ຊື່:
                    </span>
                    <span className="text-base text-foreground flex-1">
                      {"ສົ້ມ ສົ້ມ"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base text-foreground min-w-24">
                      ຈຳນວນ:
                    </span>
                    <span className="text-base text-foreground flex-1">
                      {`${data.totalPeople} ຄົນ`}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base text-foreground min-w-24">
                      ວັນທີ່:
                    </span>
                    <span className="text-base text-foreground flex-1">
                      {`${formatDate(data.date, "DD/MM/YYYY")}`}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base text-foreground min-w-24">
                      ເວລາ:
                    </span>
                    <span className="text-base text-foreground flex-1">
                      {`${formatDate(data.date, "HH:mm")} ໂມງ`}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base text-foreground min-w-24">
                      ເງິນມັດຈຳ:
                    </span>
                    <span className="text-base text-foreground flex-1">
                      {`${data.price.toLocaleString()} ໂມງ`}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base text-foreground min-w-24">
                      ລາຍລະອຽດ:
                    </span>
                    <span className="text-base text-foreground flex-1">
                      {`${data.detail || ""}`}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 w-full pt-3">
                <Button
                  size={"lg"}
                  className="px-4 py-2 !bg-[#E6DEDD] text-white font-semibold rounded-lg h-12"
                  onClick={handleClose}
                >
                  ກັບຄືນ
                </Button>
                <Button
                  size={"lg"}
                  className="px-4 py-2 !bg-secondary text-white font-semibold rounded-lg h-12"
                >
                  ຍົກເລີກການຈອງ
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
