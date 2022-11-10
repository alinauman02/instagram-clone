export interface UserProfile {
  username: string;
  email: string;
  phoneNumber: string;
  gender: 'male' | 'female' | '';
  name: string;
  bio: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
}
