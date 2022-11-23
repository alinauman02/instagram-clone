import { Metadata } from '.';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
export interface UserProfile extends Metadata {
  username: string;
  email: string;
  phoneNumber?: string;
  gender?: Gender | '';
  name: string;
  bio: string;
}
