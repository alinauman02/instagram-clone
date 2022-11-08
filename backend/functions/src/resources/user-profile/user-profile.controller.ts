import { RequestHandler } from 'express';
import { getUserProfileService } from '../../services/user-profile.service';

export const getUserProfile: RequestHandler = async (req, res) => {
  if (typeof req.query.id === 'string') {
    const profile = await getUserProfileService(req.query.id);
    res.send(profile);
  } else res.send('Error');
};
