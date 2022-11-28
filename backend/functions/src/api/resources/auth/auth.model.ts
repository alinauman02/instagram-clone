import { IsAlpha, IsAlphanumeric, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignupRequestPayLoad {
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

  @Length(8, 20)
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;

  constructor(username: string, email: string, password: string, name: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
  }
}
