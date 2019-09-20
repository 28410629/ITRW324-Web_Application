export interface RawReading {
  date: Date;
  air_Pressure: number;
  ambient_Light: number;
  humidity: number;
  temperature: number;
}

export interface RawReadings {
  Readings?: (RawReading)[] | null;
}
