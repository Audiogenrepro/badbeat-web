import mixesData from "@/data/mixes.json";

export default function ListenPage() {
    return (
        <div className="min-h-screen bg-black px-6 py-20 text-white">
            <div className="mx-auto max-w-4xl">
                 <h1 className="mb-12 font-heading text-5xl font-black uppercase">Listen</h1>
                 <div className="flex flex-col gap-12">
                    {mixesData.map((mix) => (
                        <div key={mix.id} className="w-full">
                            <h2 className="mb-2 font-heading text-xl font-bold uppercase">{mix.title}</h2>
                            <p className="mb-4 text-xs text-grey">Released: {mix.date}</p>
                            <iframe 
                                width="100%" 
                                height="166" 
                                scrolling="no" 
                                frameBorder="no" 
                                allow="autoplay" 
                                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(mix.url)}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}>
                             </iframe>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    )
}