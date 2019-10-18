export interface StationDetailModel {
  StationDetailReadings?: (StationDetailReading)[] | null;
}
export interface  StationDetailReading {
  stationId: number;
  temperatureReadingAverage: number;
  temperatureReadingMin: number;
  temperatureReadingMax: number;
  humidityReadingAverage: number;
  humidityReadingMin: number;
  humidityReadingMax: number;
  airPressureReadingAverage: number;
  airPressureReadingMin: number;
  airPressureReadingMax: number;
  ambientLightReadingAverage: number;
  ambientLightReadingMin: number;
  ambientLightReadingMax: number;
  readingTime: Date;
}
