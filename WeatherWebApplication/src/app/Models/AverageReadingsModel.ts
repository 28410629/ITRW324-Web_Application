
export interface Readings {
  readings?: (AverageReadingEntity)[] | null;
}
export interface AverageReadingEntity {
  stationId: number;
  averageTemperature: string;
  averageHumidity: string;
  averageAirPressure: string;
  averageAmbientLight: string;
}
