import eventsData from "@/data/events.json";
import Image from "next/image";
import { Event } from "@/types";

export default function EventsPage() {
  const sortedEvents = (eventsData as Event[]).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Generate JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Badbeat",
    "url": "https://www.djbadbeat.com",
    "event": sortedEvents.map(e => ({
        "@type": "MusicEvent",
        "name": e.name,
        "startDate": e.date,
        "location": {
            "@type": "Place",
            "name": e.venue,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": e.city
            }
        },
        "image": `https://www.djbadbeat.com${e.flyerImage}`
    }))
  };

  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-12 font-heading text-5xl font-black uppercase">Tour Dates</h1>
        <div className="grid gap-8">
            {sortedEvents.map((event) => (
                <div key={event.id} className="flex flex-col md:flex-row gap-6 border border-white/10 bg-neutral-900 p-6">
                    <div className="relative h-48 w-full md:w-48 shrink-0 bg-black">
                         <Image src={event.flyerImage || "/bblogo.png"} alt={event.name} fill className="object-cover" />
                    </div>
                    <div className="flex grow flex-col justify-center">
                        <div className="mb-2 text-xl font-bold uppercase text-white">{new Date(event.date).toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})}</div>
                        <h2 className="mb-1 font-heading text-3xl font-black uppercase text-white">{event.name}</h2>
                        <div className="text-grey text-lg">{event.venue} // {event.city}</div>
                    </div>
                    <div className="flex shrink-0 items-center">
                        <a href={event.ticketUrl} className="w-full md:w-auto border border-white bg-white px-8 py-4 text-center font-bold uppercase text-black transition hover:bg-black hover:text-white">
                            Tickets
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}