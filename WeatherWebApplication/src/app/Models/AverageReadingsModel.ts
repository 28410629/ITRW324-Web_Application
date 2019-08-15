
export interface Readings {
  readings?: (AverageReadingEntity)[] | null;
}
export interface AverageReadingEntity {
  StationId: string;
  Temperature: string;
  Humidity: string;
  AirPressure: string;
  AmbientLight: string;
}
