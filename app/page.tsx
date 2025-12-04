"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Instagram, Facebook, Youtube, Music, ShoppingBag, Calendar, Mail } from "lucide-react";
import { content } from "./content";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Music", href: "#music" },
    { name: "Tour", href: "#tour" },
    { name: "Shop", href: "#shop" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="font-display text-3xl tracking-widest font-bold uppercase">{content.brand.name}</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-4 rounded-md text-base font-medium uppercase text-center hover:bg-gray-900">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-24 md:py-32 px-4 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

export default function Home() {
  // Use Cal.com embed
  useEffect(() => {
    (async function () {
      const cal = await import("@calcom/embed-react");
      cal.default("init", {theme: "dark"});
    })();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background placeholder - replace with video or img in production */}
        <div className="absolute inset-0 bg-neutral-900 z-0 opacity-50"></div> 
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-4"
          >
            {content.brand.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 tracking-[0.3em] uppercase text-sm md:text-xl"
          >
            {content.hero.subheadline}
          </motion.p>
        </div>
      </section>

      {/* About */}
      <Section id="about" className="bg-black">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl mb-8 uppercase">Biography</h2>
            <p className="text-gray-400 leading-relaxed mb-6">{content.bio.short}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{content.bio.long}</p>
          </div>
          <div className="aspect-[3/4] bg-neutral-900 relative">
             {/* Placeholder for DJ Photo */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                [Add Photo to /public]
             </div>
          </div>
        </div>
      </Section>

      {/* Music */}
      <Section id="music" className="bg-neutral-950">
        <h2 className="font-display text-4xl mb-12 uppercase text-center">Latest Audio</h2>
        <div className="w-full max-w-3xl mx-auto">
          <iframe 
            width="100%" 
            height="166" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src={content.music.latestMix}
            className="w-full"
          ></iframe>
          <div className="mt-8 flex justify-center space-x-8">
            <a href={content.brand.socials.soundcloud} target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Music size={20} /> <span>SoundCloud</span>
            </a>
            {/* Add Spotify/Apple Music here similarly */}
          </div>
        </div>
      </Section>

      {/* Tour */}
      <Section id="tour">
        <h2 className="font-display text-4xl mb-12 uppercase">Upcoming Dates</h2>
        <div className="space-y-4">
          {content.tour.map((gig, i) => (
            <div key={i} className="group border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-900 transition-colors px-4">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-500 text-sm tracking-widest mb-1">{gig.date}</p>
                <h3 className="font-display text-2xl uppercase">{gig.venue}</h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-gray-400 uppercase tracking-wider text-sm">{gig.city}</span>
                <a href={gig.ticketLink} className="border border-white px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition-all">
                  Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Shop */}
      <Section id="shop" className="bg-neutral-950">
        <h2 className="font-display text-4xl mb-12 uppercase text-center">Merchandise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.shop.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-square bg-neutral-900 mb-4 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold uppercase text-sm">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">Coming Soon</p>
                </div>
                <span className="text-gray-400 text-sm">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact / Booking */}
      <Section id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-4 uppercase">Booking</h2>
          <p className="text-gray-400 mb-12">For worldwide bookings and inquiries.</p>
          
          {/* Cal.com Button Trigger */}
          <button 
            data-cal-link={content.calComLink}
            data-cal-config='{"theme":"dark"}'
            className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mb-16"
          >
            Book Now
          </button>

          <div className="border-t border-gray-800 pt-12">
            <h3 className="uppercase text-sm tracking-widest text-gray-500 mb-6">Connect</h3>
            <div className="flex justify-center space-x-8">
              <a href={content.brand.socials.instagram} className="hover:text-gray-400"><Instagram /></a>
              <a href={content.brand.socials.facebook} className="hover:text-gray-400"><Facebook /></a>
              <a href={content.brand.socials.tiktok} className="hover:text-gray-400"><Music /></a>
              <a href={content.brand.socials.youtube} className="hover:text-gray-400"><Youtube /></a>
            </div>
            <p className="mt-12 text-gray-600 text-xs">© {new Date().getFullYear()} {content.brand.name}. All Rights Reserved.</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
