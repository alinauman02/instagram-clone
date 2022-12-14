import { IsAlpha, IsEmail, IsEnum, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { Gender } from '../../../constants';

export class UserProfile {
  @Length(8, 20)
  @IsNotEmpty({ message: 'username is missing or empty' })
  username: string;

  @IsEmail()
  @IsNotEmpty({ message: 'email is missing or empty' })
  email: string;

  @Length(3, 30)
  @IsAlpha()
  @IsNotEmpty({ message: 'name is missing or empty' })
  name: string;

  @Length(10, 13)
  @IsOptional()
  phoneNumber?: string;

  @IsOptional()
  @IsEnum(Gender, { message: 'Invalid Gender' })
  gender?: Gender;

  @Length(0, 150)
  bio?: string;

  constructor(username: string, email: string, name: string, bio?: string, phoneNumber?: string, gender?: Gender) {
    this.username = username;
    this.email = email;
    this.name = name;
    this.bio = bio ? bio : '';
    this.phoneNumber = phoneNumber;
    this.gender = gender;
  }
}
