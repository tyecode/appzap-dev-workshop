import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  member: z.number().int().min(1, {
    message: "Member must be at least 1.",
  }),
  date: z.date(),
  time: z.object({
    hour: z.number().int().min(0).max(23),
    minute: z.number().int().min(0).max(59),
  }),
  detail: z.string().optional(),
});
