import { Request, Response, Router } from 'express';
import { firestore } from '../../config';
import { UserProfile } from './user-profile.model';

const profileRouter = Router();

profileRouter.put('/', (req: Request, res: Response) => {
  const profile: UserProfile = req.body.userProfile;
  firestore.collection('users').doc(profile.uid).set({
    email: profile.email,
    username: profile.username,
    phoneNumber: profile.phoneNumber,
    bio: profile.bio,
    name: profile.name,
    gender: profile.gender,
    uid: profile.uid,
  });
  res.end(profile);
});

profileRouter.get('/:id', async (req: Request, res: Response) => {
  if (typeof req.query.id === 'string') {
    const ref = await firestore.collection('users').doc(req.query.id);
    const doc = await ref.get();
    if (doc.exists) {
      res.end(doc);
    } else {
      console.log('');
    }
  } else {
    console.log('Error!');
  }
});

export { profileRouter };
