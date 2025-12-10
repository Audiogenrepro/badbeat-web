"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  venue: z.string().optional(),
  date: z.string().optional(),
  message: z.string().min(1),
});

export async function submitBooking(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    venue: formData.get("venue"),
    date: formData.get("date"),
    message: formData.get("message"),
  };

  const result = schema.safeParse(rawData);

  if (!result.success) {
    return { success: false, errors: result.error.flatten() };
  }

  // TODO: Connect to Resend, SendGrid, or Nodemailer here.
  // For now, we log to console as requested for the "clean UI" phase.
  console.log("--- NEW BOOKING INQUIRY ---");
  console.log(result.data);
  console.log("---------------------------");

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}