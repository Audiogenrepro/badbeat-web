"use client";

import { useState } from "react";
import { submitBooking } from "@/lib/actions";

export default function BookingsPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await submitBooking(formData);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 font-heading text-5xl font-black uppercase">Bookings</h1>
        <p className="mb-12 text-grey">For bookings and inquiries, please fill out the form below or email <a href="mailto:bookings@mntra.vegas" className="text-white underline">bookings@mntra.vegas</a>.</p>

        <div className="mb-12 border border-white/20 bg-neutral-900 p-8">
            <h2 className="mb-6 font-bold uppercase">Press Kit</h2>
            <p className="mb-6 text-sm text-grey">Download the official EPK including hi-res photos, bio, and technical rider.</p>
            <a href="/assets/badbeat-epk.pdf" download className="inline-block bg-white px-8 py-3 text-sm font-bold uppercase text-black transition hover:bg-grey">
                Download Press Kit (PDF)
            </a>
        </div>

        {status === "success" ? (
          <div className="border border-green-500 bg-green-500/10 p-8 text-center">
            <h3 className="mb-2 text-xl font-bold text-green-500">Message Sent</h3>
            <p>We have received your inquiry and will be in touch shortly.</p>
            <button onClick={() => setStatus("idle")} className="mt-4 text-sm underline">Send another</button>
          </div>
        ) : (
          <form action={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input name="name" type="text" placeholder="Promoter / Name" required className="bg-neutral-900 border border-white/20 p-4 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none" />
              <input name="email" type="email" placeholder="Email Address" required className="bg-neutral-900 border border-white/20 p-4 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <input name="date" type="date" className="bg-neutral-900 border border-white/20 p-4 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none" />
                <input name="venue" type="text" placeholder="Venue / City" className="bg-neutral-900 border border-white/20 p-4 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none" />
            </div>
            <textarea name="message" rows={5} placeholder="Tell us about the event..." required className="bg-neutral-900 border border-white/20 p-4 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none" />
            
            <button type="submit" disabled={status === "loading"} className="bg-white py-4 text-sm font-bold uppercase text-black transition hover:bg-grey disabled:opacity-50">
              {status === "loading" ? "Sending..." : "Submit Inquiry"}
            </button>
            {status === "error" && <p className="text-red-500">Something went wrong. Please try again or email directly.</p>}
          </form>
        )}
      </div>
    </div>
  );
}
