import { IsAlpha, IsAlphanumeric, IsDefined, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignupRequestPayLoad {
  @Length(8, 20)
  @IsNotEmpty()
  @IsDefined({ message: 'Username is missing' })
  username: string;

  @IsEmail()
  @IsDefined({ message: 'Email is missing' })
  @IsNotEmpty()
  email: string;

  @Length(3, 30)
  @IsAlpha()
  @IsDefined({ message: 'Name is missing' })
  @IsNotEmpty()
  name: string;

  @Length(8, 20)
  @IsDefined({ message: 'Password is missing' })
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
