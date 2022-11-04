import { functions } from '../config';



export const onAuthCreate = functions.auth.user().onCreate(user => {
  console.log(user);
});
