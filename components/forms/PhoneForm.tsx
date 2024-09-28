"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useRouter } from "next/navigation";
import { PhoneIcon } from "lucide-react";

const formSchema = z.object({
  phone: z.string().min(8, "ເບີໂທຕ້ອງມີຕົວເລກ 8 ໂຕ"),
});

export const PhoneForm: React.FC = ({}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push(`/booking/register/${values.phone}`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ເຂົ້າສູ່ລະບົບ</FormLabel>
              <div className="relative flex items-center">
                <PhoneIcon className="w-6 h-6 mx-auto text-primary absolute ml-3" />
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="h-12 pl-11 text-base border-[#84746B] !ring-offset-0 !outline-none focus:border-ring focus:!ring-1"
                    maxLength={8}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="fixed left-0 right-0 bottom-16 w-full pt-6 pb-12 container flex flex-col gap-5 rounded-tl-md rounded-tr-md">
          <Button className="w-full h-12 !bg-secondary shadow-md font-semibold">
            ຕໍ່ໄປ
          </Button>
        </div>
      </form>
    </Form>
  );
};
