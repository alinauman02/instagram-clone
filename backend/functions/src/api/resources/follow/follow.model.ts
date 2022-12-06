import { IsAlpha, IsNotEmpty, Length } from 'class-validator';

export class FollowRequestPlayLoad {
  uid?: string;
  @Length(8, 20)
  @IsNotEmpty({ message: 'username is missing or empty' })
  username: string;

  @Length(3, 30)
  @IsAlpha()
  @IsNotEmpty({ message: 'name is missing or empty' })
  name: string;

  constructor(username: string, name: string, uid?: string) {
    this.username = username;
    this.name = name;
    this.uid = uid;
  }
}
