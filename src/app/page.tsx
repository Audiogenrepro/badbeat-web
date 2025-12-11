import Image from "next/image";
import Link from "next/link";
import eventsData from "@/data/events.json";
import mixesData from "@/data/mixes.json";
import { Event } from "@/types";

export default function Home() {
  // Get upcoming 3 events
  const upcomingEvents = (eventsData as Event[])
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const featuredMix = mixesData.find((m) => m.featured) || mixesData[0];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/hero.jpg"
          alt="Badbeat Hero"
          fill
          // CHANGED: added 'object-top' to fix the cut-off issue
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="relative mb-6 h-32 w-80 md:h-48 md:w-[500px]">
             <Image src="/bblogo.png" alt="Badbeat" fill className="object-contain" />
          </div>
          <h2 className="font-heading text-xl font-bold uppercase tracking-[0.2em] text-white md:text-2xl">
            Underground Techno / House
          </h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-white/80">Las Vegas</p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link href="/listen" className="border border-white bg-white px-8 py-3 text-sm font-bold uppercase text-black transition hover:bg-black hover:text-white">
              Listen
            </Link>
            <Link href="/events" className="border border-white px-8 py-3 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black">
              Events
            </Link>
            {/* ADDED: New Bookings Button */}
            <Link href="/bookings" className="border border-white px-8 py-3 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black">
              Bookings
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Mix */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-8 font-heading text-3xl font-black uppercase text-white">Latest Sound</h3>
          <div className="w-full border border-white/20">
             {/* Using standard iframe for robust SoundCloud embedding without heavy libs */}
             <iframe 
                width="100%" 
                height="166" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(featuredMix.url)}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}>
             </iframe>
          </div>
        </div>
      </section>

      {/* Video Reel */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
            <h3 className="mb-12 font-heading text-3xl font-black uppercase text-white text-center">Visuals</h3>
            <div className="relative aspect-video w-full overflow-hidden border border-white/10">
                <video controls className="h-full w-full object-cover">
                    <source src="/videoreel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <h3 className="font-heading text-3xl font-black uppercase">Next Shows</h3>
            <Link href="/events" className="text-sm underline underline-offset-4 hover:text-grey">
              View All
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group border border-white/20 bg-neutral-900 p-4 transition hover:border-white">
                <div className="relative mb-4 aspect-square w-full bg-neutral-800">
                    {/* Fallback image logic handled by Next/Image */}
                    <Image src={event.flyerImage || "/bblogo.png"} alt={event.name} fill className="object-cover opacity-80 transition group-hover:opacity-100" />
                </div>
                <div className="mb-1 text-xs text-grey">
                    {new Date(event.date).toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' })}
                </div>
                <h4 className="mb-1 font-heading text-lg font-bold uppercase">{event.name}</h4>
                <p className="text-sm text-grey">{event.venue} - {event.city}</p>
                <a href={event.ticketUrl} className="mt-4 block w-full border border-white/20 bg-black py-2 text-center text-xs font-bold uppercase transition hover:bg-white hover:text-black">
                  Tickets / RSVP
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
