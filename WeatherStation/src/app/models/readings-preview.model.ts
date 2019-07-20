export interface Readings {
  readings?: (ReadingEntity)[] | null;
}
export interface ReadingEntity {
  StationId: string;
  Temperature: string;
  Humidity: string;
  AirPressure: string;
  AmbientLight: string;
}
