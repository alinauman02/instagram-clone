import { IsAlpha, IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { Gender } from '../../../constants';

export class UserProfile {
  @Length(8, 20)
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(3, 30)
  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @Length(10, 13)
  @IsOptional()
  phoneNumber?: string;

  @IsOptional()
  gender?: Gender;

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
    gender?: Gender,
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
    this.gender = gender;
  }
}
