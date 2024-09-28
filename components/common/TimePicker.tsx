import { useEffect, useRef, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";

import { Clock3Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  value?: { hour: number; minute: number };
  onChange: (value: { hour: number; minute: number }) => void;
}

export function TimePicker({
  value = { hour: 0, minute: 0 },
  onChange,
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<{ hour: number; minute: number }>(value);

  const hourListRef = useRef<HTMLDivElement>(null);
  const minuteListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value && (value.hour !== time.hour || value.minute !== time.minute)) {
      setTime(value);
    }
  }, [time.hour, time.minute, value]);

  const scrollToMiddle = (
    ref: React.RefObject<HTMLDivElement>,
    length: number
  ) => {
    if (ref.current) {
      const itemHeight = ref.current.scrollHeight / (length * 3);
      ref.current.scrollTop = itemHeight * length;
    }
  };

  useEffect(() => {
    scrollToMiddle(hourListRef, 24);
    scrollToMiddle(minuteListRef, 60);
  }, []);

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement>,
    length: number
  ) => {
    if (ref.current) {
      const itemHeight = ref.current.scrollHeight / (length * 3);
      const scrollTop = ref.current.scrollTop;

      if (scrollTop < itemHeight) {
        ref.current.scrollTop += itemHeight * length;
      } else if (scrollTop > itemHeight * (length * 2)) {
        ref.current.scrollTop -= itemHeight * length;
      }
    }
  };

  const handleHourChange = (hour: number) => {
    const newHour = hour % 24;
    const newTime = { ...time, hour: newHour < 0 ? 23 : newHour };
    setTime(newTime);
    onChange(newTime);
  };

  const handleMinuteChange = (minute: number) => {
    const newMinute = minute % 60;
    const newTime = { ...time, minute: newMinute < 0 ? 59 : newMinute };
    setTime(newTime);
    onChange(newTime);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const renderInfiniteList = (
    list: number[],
    onChange: (val: number) => void,
    currentValue: number,
    ref: any,
    length: number
  ) => {
    const duplicatedList = [...list, ...list, ...list];

    return (
      <div
        className="overflow-y-scroll h-[200px] w-12 scrollbar-hide"
        ref={ref}
        onScroll={() => handleScroll(ref, length)}
      >
        {duplicatedList.map((item, i) => (
          <div
            key={i}
            className={cn(
              "py-2 text-center cursor-pointer",
              currentValue === item && "bg-primary text-white rounded-md"
            )}
            onClick={() => onChange(item)}
          >
            {item.toString().padStart(2, "0")}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal text-base",
            "h-12 border-[#84746B] !bg-background !text-foreground",
            isOpen && "!border-ring !ring-ring ring-1",
            !time && "text-muted-foreground"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {time ? (
            <span className="flex-1">
              {`${time.hour.toString().padStart(2, "0")}:${time.minute
                .toString()
                .padStart(2, "0")}`}
            </span>
          ) : (
            <span className="flex-1">Pick a time</span>
          )}
          <Clock3Icon className="mr-2 h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 mx-4 flex gap-2 border rounded-md select-none outline-none bg-background z-30">
        <div className="flex flex-col items-center">
          {renderInfiniteList(
            hours,
            handleHourChange,
            time.hour,
            hourListRef,
            24
          )}
        </div>
        <div className="flex flex-col items-center">
          {renderInfiniteList(
            minutes,
            handleMinuteChange,
            time.minute,
            minuteListRef,
            60
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
