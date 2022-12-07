import { useFollowUserProfileMutation, useUnFollowUserProfileMutation } from 'apis/follow.api';
import { useAppSelector } from 'store';
import { selectFollowers } from 'store/slices/follow-slice';
import './ProfileListsItem.css';

interface PorfileListItemProps {
  name: string;
  description: string;
  icon: string;
  type: 'self' | 'others';
  button: string;
  list: 'followers' | 'followings';
  OnClick?: () => void;
}

export function ProfileListsItem({ name, description, icon, type, list }: PorfileListItemProps) {
  const followers = useAppSelector(selectFollowers);
  const [FollowProfile] = useFollowUserProfileMutation();
  const [unFollowProfile] = useUnFollowUserProfileMutation();

  let checkFollowings = false;
  followers.forEach(data => {
    if (data.name === name && description === data.username) checkFollowings = true;
  });
  let button = '';
  if (list === 'followers') {
    if (type === 'self') button = 'remove';
    else {
      if (checkFollowings) button = 'following';
      else button = 'follow';
    }
  } else {
    if (type === 'self') button = 'unfollow';
    else {
      if (checkFollowings) button = 'following';
      else button = 'follow';
    }
  }

  const onClickButton = async () => {
    if (button === 'follow') {
      await FollowProfile(description);
      button = 'followings';
    }
    if (button === 'unfollow') {
      await unFollowProfile(description);
      button = 'followings';
    }
  };

  return (
    <div className="flex-box profile-list-item">
      <img className="profile-icon" src={icon} alt="kjsaf"></img>
      <div>
        <h3>{name}</h3>
        <span>{description}</span>
      </div>
      {type === 'others'}
      <button className="profile-item-button" onClick={onClickButton}>
        {button}
      </button>
    </div>
  );
}
