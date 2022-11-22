import { IsAlpha, IsEmail, IsNumberString, Length, MaxLength, MinLength } from 'class-validator';

export class UserProfile {
  @MinLength(10, {
    message: 'Username is too short',
  })
  @MaxLength(20, {
    message: 'Username is too long',
  })
  username?: string;

  @IsEmail({},{ message: 'Invalid email' })
  email?: string;

  @Length(10, 13)
  @IsNumberString()
  phoneNumber?: string;

  gender?: 'male' | 'female' | '';

  @IsAlpha()
  name?: string;
  bio?: string;

  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
}
