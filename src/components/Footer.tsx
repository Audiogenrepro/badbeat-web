import { FaInstagram, FaSoundcloud, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div>
            <h3 className="font-heading text-2xl font-black uppercase">Badbeat</h3>
            <p className="mt-2 text-sm text-grey">Underground Techno / Stripped House</p>
            <p className="text-sm text-grey">Las Vegas, NV</p>
          </div>
          
          <div className="flex flex-col gap-4">
             <h4 className="font-bold uppercase tracking-widest text-sm">Booking</h4>
             <a href="mailto:bookings@djbadbeat.com" className="hover:text-grey text-lg underline underline-offset-4">bookings@djbadbeat.com</a>
          </div>

          <div>
             <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Connect</h4>
            <div className="flex space-x-6 text-2xl">
              <a href="https://instagram.com/badbeat" target="_blank" className="hover:text-grey"><FaInstagram /></a>
              <a href="https://soundcloud.com/badbeat" target="_blank" className="hover:text-grey"><FaSoundcloud /></a>
              <a href="https://facebook.com/badbeat" target="_blank" className="hover:text-grey"><FaFacebookF /></a>
              <a href="https://tiktok.com/@badbeat.official" target="_blank" className="hover:text-grey"><FaTiktok /></a>
              <a href="https://youtube.com/@djtinog" target="_blank" className="hover:text-grey"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} Badbeat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}