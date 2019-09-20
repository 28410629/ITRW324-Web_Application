export interface StationList {
  stations?: (Station)[] | null;
}

export interface Station {
  stationId: number;
  userId: number;
  locationId: number;
  nickName: string;
}
