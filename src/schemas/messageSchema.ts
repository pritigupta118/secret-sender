
import { z } from "zod"

export const messageSchema = z.object({
  content: z
   .string()
   .min(10, { message: "Content must be atleast 10 characters" })
   .max(1000, { message: "Content must be no longer than 1000 characters"})
})