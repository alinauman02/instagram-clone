import { auth } from '../../../config';

export async function signUpUser(email: string, password: string,username:string) {
  
  const res=await auth.createUser({ email, password });
  auth.setCustomUserClaims(res.uid,{username})
  return res;
}
