export interface Event {
  id: string;
  name: string;
  date: string; // ISO 8601
  venue: string;
  city: string;
  ticketUrl: string;
  flyerImage?: string; // Optional path in public/
}

export interface Mix {
  id: string;
  title: string;
  url: string;
  date: string;
  featured: boolean;
  platform: "soundcloud" | "mixcloud";
}