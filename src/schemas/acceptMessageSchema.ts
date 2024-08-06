import { z } from "zod"

export const acceptMessageSchema = z.object({
  accetMessages: z.boolean()
})