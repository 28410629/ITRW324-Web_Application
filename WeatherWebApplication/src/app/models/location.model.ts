export interface City {
  city: string;
}

export interface Province {
  province: string;
  cities?: (City)[] | null;
}

export interface Country {
  country: string;
  province?: (Province)[] | null;
}

export interface Countries {
  Countries?: (Country)[] | null;
}
