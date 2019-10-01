export interface Reading {
    temperatureReadingAverage: string;
    temperatureReadingMin: string;
    temperatureReadingMax: string;
    humidityReadingAverage: string;
    humidityReadingMin: string;
    humidityReadingMax: string;
    airPressureReadingAverage: string;
    airPressureReadingMin: string;
    airPressureReadingMax: string;
    ambientLightReadingAverage: string;
    ambientLightReadingMin: string;
    ambientLightReadingMax: string;
    readingTime: Date;
  }

  export interface LocationOverview {
    readings: Reading[];
    found: number;
  }
