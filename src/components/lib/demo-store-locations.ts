export interface StoreLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  closesAt: string;
  distance: string;
  tags: StoreTag[];
  isOpen: boolean;
}

export type StoreTag =
  | "Delivery Available"
  | "Pet Friendly"
  | "Premium CBD"
  | "Vape"
  | "CBD";

export const DEMO_STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 1,
    name: "Bahama Mama Houston - Main",
    address: "123 Main St",
    city: "Houston",
    state: "TX",
    zip: "77002",
    lat: 29.7604,
    lng: -95.3698,
    closesAt: "10:00 PM",
    distance: "0.6 mi",
    tags: ["Delivery Available"],
    isOpen: true,
  },
  {
    id: 2,
    name: "Bahama Mama Midtown",
    address: "456 Elgin St",
    city: "Houston",
    state: "TX",
    zip: "77004",
    lat: 29.749,
    lng: -95.381,
    closesAt: "11:00 PM",
    distance: "2.4 mi",
    tags: ["Pet Friendly"],
    isOpen: true,
  },
  {
    id: 3,
    name: "Bahama Mama Heights",
    address: "789 19th St",
    city: "Houston",
    state: "TX",
    zip: "77008",
    lat: 29.798,
    lng: -95.405,
    closesAt: "10:00 PM",
    distance: "4.1 mi",
    tags: ["Premium CBD"],
    isOpen: true,
  },
  {
    id: 4,
    name: "Bahama Mama River Oaks",
    address: "1020 Westheimer Rd",
    city: "Houston",
    state: "TX",
    zip: "77006",
    lat: 29.741,
    lng: -95.42,
    closesAt: "9:00 PM",
    distance: "5.8 mi",
    tags: ["CBD", "Vape"],
    isOpen: true,
  },
  {
    id: 5,
    name: "Bahama Mama Galleria",
    address: "5085 Westheimer Rd",
    city: "Houston",
    state: "TX",
    zip: "77056",
    lat: 29.7369,
    lng: -95.4613,
    closesAt: "10:00 PM",
    distance: "7.2 mi",
    tags: ["Delivery Available", "Pet Friendly"],
    isOpen: false,
  },
  {
    id: 6,
    name: "Bahama Mama Sugar Land",
    address: "2300 Town Center Blvd",
    city: "Sugar Land",
    state: "TX",
    zip: "77479",
    lat: 29.5897,
    lng: -95.6352,
    closesAt: "9:30 PM",
    distance: "12.4 mi",
    tags: ["Premium CBD"],
    isOpen: true,
  },
];