export interface Review {
  id: number;
  name: string;
  store: string;
  image: string;
  quote: string;
  rating: number;
  accentTop?: boolean;
}

export interface JournalPost {
    id: number;
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
    href: string;
}