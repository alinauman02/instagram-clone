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
  if (typeof req.params.id === 'string') {
    const userProfile: UserProfile = req.body.profile;
    const profile = await patchUserProfileService(req.params.id, userProfile);
    res.send(profile);
  } else res.send('Error');
};
