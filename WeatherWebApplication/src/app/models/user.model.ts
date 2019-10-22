export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  favStations: number[];
  checkBoxArray: boolean[];
  myStations: number[];
  theme: string;
}

export interface FirebaseUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
