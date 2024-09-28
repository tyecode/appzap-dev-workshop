"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PiWarningCircleBold } from "react-icons/pi";

import { formSchema } from "@/app/booking/[id]/schema";
import { DatePicker } from "@/components/common/DatePicker";
import { TimePicker } from "@/components/common/TimePicker";
import { Option, Select } from "@/components/common/Selector";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface BookingFormProps {
  handleOnSubmit: (values: any) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ handleOnSubmit }) => {
  const [selectedValue, setSelectedValue] = useState<string>("ເບຍລາວ 3 ແກ້ວ");
  const [member, setMember] = useState<number>(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      member: 1,
      date: new Date(),
      time: { hour: 5, minute: 30 },
      detail: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleOnSubmit({
      ...values,
      money: member * 20000,
      options: selectedValue,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ຊື່ຜູ້ຈອງ</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="h-12 text-base border-[#84746B] !ring-offset-0 !outline-none focus:border-ring focus:!ring-1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="member"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ຈຳນວນສະມາຊິກ</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  className="h-12 text-base border-[#84746B] !ring-offset-0 !outline-none focus:border-ring focus:!ring-1"
                  value={field.value}
                  onChange={(e) => {
                    setMember(Number(e.target.value));
                    field.onChange(Number(e.target.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ວັນທີ</FormLabel>
                <FormControl>
                  <DatePicker value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ເວລາ</FormLabel>
                <FormControl>
                  <TimePicker
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="detail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ລາຍລະອຽດເພີ່ມເຕີມ</FormLabel>
              <FormControl>
                <Input
                  placeholder="ຕົວຢ່າງ: ຢາກນັ່ງໂຕະແຖວໜ້າເວທີ.."
                  {...field}
                  className="h-12 text-base border-[#84746B] !ring-offset-0 !outline-none focus:border-ring focus:!ring-1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex-center flex-col text-sm text-black gap-3 py-2">
          <div className="flex-center gap-3">
            <PiWarningCircleBold className="text-muted-foreground w-6 h-6" />
            <div className="flex-center gap-1">
              <span className="underline">ໝາຍເຫດ:</span>
              <span>ທ່ານຕ້ອງໄດ້ຈ່າຍເງິນມັດຈຳກ່ອນ</span>
            </div>
          </div>
          <span>ຈຳນວນເງິນແມ່ນທ່ານສາມາດເລືອກເຄື່ອງດື່ມຈາກທາງຮ້ານໄດ້</span>
          <Select selectedValue={selectedValue} onChange={setSelectedValue}>
            <Option value="ເບຍລາວ 3 ແກ້ວ">ເບຍລາວ 3 ແກ້ວ</Option>
            <Option value="ເບຍ Heineken 2 ແກ້ວ">ເບຍ Heineken 2 ແກ້ວ</Option>
          </Select>
        </div>
        <div className="fixed left-0 right-0 bottom-16 w-full pt-6 pb-12 container bg-accent flex flex-col gap-5 rounded-tl-md rounded-tr-md">
          <div className="w-full flex-between">
            <span className="text-sm text-[#696969]">ເງິນມັດຈຳ:</span>
            <span className="text-base font-bold text-primary">
              {(member * 20000 || 0).toLocaleString()} ກີບ
            </span>
          </div>
          <Button className="w-full h-12 !bg-secondary shadow-md font-semibold">
            ຢືນຢັນ
          </Button>
        </div>
      </form>
    </Form>
  );
};
