import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 font-heading text-5xl font-black uppercase tracking-tighter">
          About
        </h1>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Bio Text */}
          <div className="space-y-6 text-sm leading-relaxed text-grey md:text-base">
            <p>
              <strong className="text-white">BADBEAT</strong> is a producer and selector shaped by the desert heat of Las Vegas and the raw energy of Mexico.
            </p>
            <p>
              Working strictly within the realms of stripped rhythm, repetition, and tension, his sound focuses on raw percussion, mechanical pulse, and subtle distortion. It is built to hold pressure on a floor—refined through real impact rather than theory.
            </p>
            <p>
              As a resident at <span className="text-white">Techno Taco Tuesday</span>, he tests ideas directly in front of crowds week after week. His history includes sets alongside heavyweights such as Adam Beyer, Richie Hawtin, Green Velvet, Joseph Capriati, and Carl Cox.
            </p>
            <p>
              Current work centers on studio output and the "badbeat" brand. New material is always in motion, guided by reduction, groove architecture, and sound design aimed at clarity, weight, and movement.
            </p>
            
            <div className="pt-6">
                <Link href="/bookings" className="inline-block border border-white px-8 py-3 text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black">
                    Contact for Bookings
                </Link>
            </div>
          </div>

          {/* Visual / Stats */}
          <div className="relative min-h-[400px] border border-white/10 bg-neutral-900">
             {/* Reusing the hero image here, but cropped to focus on the artist */}
             <Image 
                src="/heros.jpg" 
                alt="Badbeat Profile" 
                fill 
                className="object-cover grayscale"
             />
          </div>
        </div>

        {/* Quick Stats / Footer info */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-4">
            <div>
                <h4 className="font-bold uppercase text-white">Origin</h4>
                <p className="text-xs text-grey">MEXICO</p>
            </div>
            <div>
                <h4 className="font-bold uppercase text-white">Base</h4>
                <p className="text-xs text-grey">Las Vegas, NV</p>
            </div>
            <div>
                <h4 className="font-bold uppercase text-white">Focus</h4>
                <p className="text-xs text-grey">For the Love of Music</p>
            </div>
            <div>
                <h4 className="font-bold uppercase text-white">Affiliation</h4>
                <p className="text-xs text-grey">MNTRA | TRONIC | TTT</p>
            </div>
        </div>
      </div>
    </div>
  );
}
