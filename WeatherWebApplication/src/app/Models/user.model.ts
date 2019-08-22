export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface UserProfileData {
  name: string;
  picture: string;
  uid: string;
}