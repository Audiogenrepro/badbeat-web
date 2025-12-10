"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Image from "next/image";

const navItems = [
  { name: "Events", path: "/events" },
  { name: "Listen", path: "/listen" },
  { name: "Media", path: "/media" },
  { name: "About", path: "/about" },
  { name: "Bookings", path: "/bookings" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="relative h-10 w-32">
            {/* Fallback to text if image fails to load, but image is prioritized */}
             <Image src="/bblogo.png" alt="BADBEAT" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-grey ${
                pathname === item.path ? "text-white underline underline-offset-4" : "text-neutral-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <button className="text-2xl text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-20 h-screen w-full bg-black px-6 py-12 md:hidden">
          <div className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="font-heading text-4xl uppercase text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}