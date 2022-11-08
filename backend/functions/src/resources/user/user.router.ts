import { Request, Response, Router } from 'express';
import { auth } from './../../config';
import { User } from './user.model';

export async function signUp(user: User) {
  const res = await auth.createUser({ email: user.email, password: user.password });
  return res.uid;
}

const userRouter = Router();

userRouter.put('/', async (req: Request, res: Response) => {
  try {
    const user: User = req.body.user;
    const uid = await signUp(user);
    res.end(uid);
  } catch (error) {
    console.log(error);
  }
});

export { userRouter };
