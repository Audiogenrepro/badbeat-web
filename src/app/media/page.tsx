import Image from "next/image";

const images = [
    "/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg" 
];

export default function MediaPage() {
    return (
        <div className="min-h-screen bg-black px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-12 font-heading text-5xl font-black uppercase text-white">Media</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((src, i) => (
                        <div key={i} className="relative aspect-square w-full border border-white/10 bg-neutral-900 grayscale transition hover:grayscale-0">
                             <Image src={src} alt={`Badbeat Media ${i}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}