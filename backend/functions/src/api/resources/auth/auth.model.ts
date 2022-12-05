import { IsAlpha, IsAlphanumeric, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignupRequestPayLoad {
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

  @Length(8, 20)
  @IsAlphanumeric()
  @IsNotEmpty({ message: 'password is missing or empty' })
  password: string;

  constructor(username: string, email: string, password: string, name: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
  }
}
