import { Metadata } from './meta-data';

export interface UserProfile extends Metadata {
  username: string;
  email: string;
  phoneNumber: string;
  gender: 'male' | 'female' | '';
  name: string;
  bio: string;
}
