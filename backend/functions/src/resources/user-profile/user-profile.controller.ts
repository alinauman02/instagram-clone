import { RequestHandler } from 'express';
import { UserProfile } from '.';
import { getUserProfileService, patchUserProfileService } from '../../services/user-profile.service';

export const getUserProfile: RequestHandler = async (req, res) => {
  if (typeof req.params.id === 'string') {
    const profile = await getUserProfileService(req.params.id);
    res.send(profile);
  } else res.send('Error');
};

export const patchUserProfile: RequestHandler = async (req, res) => {
  if (typeof req.query.id === 'string') {
    const userProfile: UserProfile = req.body.profile;
    console.log(req.query.id, '   ', userProfile);
    const profile = await patchUserProfileService(req.query.id, userProfile);
    res.send(profile);
  } else res.send('Error');
};
