import { IsAlpha, IsEmail, IsOptional, Length, MaxLength, MinLength } from 'class-validator';
import { Gender } from '../../../constants';

export class UserProfile {
  @MinLength(3, {
    message: 'Username is too short',
  })
  @MaxLength(20, {
    message: 'Username is too long',
  })
  username: string;

  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @Length(10, 13)
  phoneNumber?: string;

  @IsOptional()
  gender?: Gender;

  @IsAlpha()
  name: string;

  @Length(0, 150)
  bio?: string;

  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;

  constructor(
    username: string,
    email: string,
    name: string,
    bio?: string,
    phoneNumber?: string,
    createdAt?: Date,
    updatedAt?: Date,
    isDeleted?: boolean
  ) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.bio = bio ? bio : '';
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
    this.phoneNumber = phoneNumber;
  }
}
