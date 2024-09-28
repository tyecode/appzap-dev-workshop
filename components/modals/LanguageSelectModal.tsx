import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LanguageSelectModal: React.FC<LanguageSelectModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleLanguageSelect = (language: string) => {
    console.log(`Selected language: ${language}`);
    handleClose();
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
            className="bg-white rounded-3xl shadow-lg z-10 w-96"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center items-center py-6">
              <h1 className="text-xl font-semibold">ເລືອກພາສາ</h1>
            </div>
            <hr className="py-3 border-t-1 border-accent" />
            <div className="flex-center flex-col gap-3 pb-12">
              <motion.button
                className="p-2 border w-[215px] h-[52px] bg-accent/50 border-none shadow-md rounded-full text-secondary font-bold tracking-wide"
                onClick={() => handleLanguageSelect("EN")}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
              <motion.button
                className="p-2 border w-[215px] h-[52px] bg-accent/50 border-none shadow-md rounded-full text-secondary font-bold tracking-wide"
                onClick={() => handleLanguageSelect("LA")}
                whileTap={{ scale: 0.95 }}
              >
                LA
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
