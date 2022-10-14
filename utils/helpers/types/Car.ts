export interface Car {
  id: string;
  imageUrl: string;
  year: number;
  sold: boolean;
  title: string;
  price: number;
  oldPrice: number;
}

export interface CarDetails extends Car {
  brand: string;
  brandImageUrl: string;
  fuelType: string;
  name: string;
  condition: string;
  state: string;
  city: string;
  interiorColor: string;
  exteriorColor: string;
  country: string;
}
