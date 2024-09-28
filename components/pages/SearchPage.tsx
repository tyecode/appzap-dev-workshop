import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { HiMiniXMark } from "react-icons/hi2";
import { MdHistory } from "react-icons/md";

const searchList = [
  {
    id: 1,
    title: "ຮ້ານ ແມ່ຄົວຕຸກກີ້",
  },
  {
    id: 2,
    title: "ຮ້ານ ແມ່ຄົວຕຸກກີ້",
  },
  {
    id: 3,
    title: "ຮ້ານ ແມ່ຄົວຕຸກກີ້",
  },
];

interface SearchPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full h-[100dvh] bg-white absolute top-0 right-0">
      <div className="flex-center w-full container py-2 border-b border-accent">
        <div className="w-9 cursor-pointer" onClick={onClose}>
          <FiChevronLeft className="w-7 h-7 text-primary -mr-2" />
        </div>
        <input
          type="text"
          placeholder="ຄົ້ນຫາຮ້ານອາຫານ............"
          className="flex-1 bg-accent rounded-full px-3 py-1 text-base text-foreground focus:outline-none"
        />
        <button className="bg-accent rounded-md py-1 px-3 text-base text-gray-500 ml-2">
          ຄົ້ນຫາ
        </button>
      </div>
      <div className="container w-full flex-between text-base py-3">
        <span className="text-muted-foreground">ລ່າສຸດ</span>
        <Link href={""} className="text-blue-400 hover:underline">
          ເບິ່ງທັງໝົດ
        </Link>
      </div>
      <div className="flex flex-col gap-1 py-1">
        {searchList.map((item) => (
          <div
            key={item.id}
            className="container py-2 flex-between cursor-pointer"
          >
            <div className="flex gap-1 items-center">
              <MdHistory className="w-7 h-7 text-muted-foreground" />
              <span className="text-base text-foreground">{item.title}</span>
            </div>
            <HiMiniXMark className="w-7 h-7 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
};
