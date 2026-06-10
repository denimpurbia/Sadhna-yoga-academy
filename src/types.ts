export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  videoThumbUrl: string;
  videoEmbedUrl: string;
  quote: string;
  rating: number;
  duration: string;
}
