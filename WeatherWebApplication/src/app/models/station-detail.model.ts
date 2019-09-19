export interface StationDetailModel {
  StationDetailReadings?: (StationDetailReading)[] | null;
}
export interface  StationDetailReading {
  stationId: number;
  temperatureReadingAverage: string;
  temperatureReadingMin: string;
  temperatureReadingMax: string;
  humiditiyReadingAverage: string;
  humiditiyReadingMin: string;
  humiditiyReadingMax: string;
  airPressureReadingAverage: string;
  airPressureReadingMin: string;
  airPressureReadingMax: string;
  ambientLightReadingAverage: string;
  ambientLightReadingMin: string;
  ambientLightReadingMax: string;
  readingTime: string;
}
