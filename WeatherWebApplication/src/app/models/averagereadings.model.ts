
export interface AverageReading {
  avgReadings?: (AverageReadingEntity)[] | null;
}
export interface AverageReadingEntity {
  stationName: string;
  averageTemp: string;
  maxTemp: string;
  minTemp: string;
  ambientLight: string;
  humidity: string;
  forecastDay1: string;
  forecastDay2: string;
  forecastDay3: string;
  forecastDay4: string;
}
