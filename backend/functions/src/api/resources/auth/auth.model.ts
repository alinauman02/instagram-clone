import { IsAlpha, IsAlphanumeric, IsEmail, Length, MaxLength, MinLength } from 'class-validator';

export class SignupRequestPayLoad {
  @MinLength(10, {
    message: 'Username is too short',
  })
  @MaxLength(20, {
    message: 'Username is too long',
  })
  username: string;

  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @Length(10, 30)
  @IsAlpha()
  name: string;

  @Length(8, 20)
  @IsAlphanumeric()
  password: string;
  
  constructor(username: string, email: string, password: string, name: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
  }
}
