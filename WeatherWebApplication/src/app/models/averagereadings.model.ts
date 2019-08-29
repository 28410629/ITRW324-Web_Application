
export interface AverageReading {
  avgReadings?: (AverageReadingEntity)[] | null;
}
export interface AverageReadingEntity {
  StationName: string;
  AverageTemp: string;
  MaxTemp: string;
  MinTemp: string;
  AmbientLight: string;
  Humidity: string;
  ForecastDay1: string;
  ForecastDay2: string;
  ForecastDay3: string;
  ForecastDay4: string;
}
