import { IsEmail, IsOptional, Length, Matches, MaxLength, MinLength } from 'class-validator';
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
  @IsOptional()
  phoneNumber?: string;

  @IsOptional()
  gender?: Gender;

  @Matches(new RegExp('[a-zA-Z]*'))
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
