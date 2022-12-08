import { useGetProfileByUsernameQuery } from 'apis';
import { useFollowUserProfileMutation, useUnFollowUserProfileMutation } from 'apis/follow.api';
import { useState } from 'react';
import { selectUsername, useAppSelector } from 'store';
import './ProfileListsItem.css';

interface PorfileListItemProps {
  name: string;
  username: string;
  src: string;
  type: 'self' | 'others';
  button: string;
  list: 'followers' | 'followings';
  OnClick?: () => void;
}

export function ProfileListsItem({ name, username, src: icon, type, list }: PorfileListItemProps) {
  const currentUsername: string = useAppSelector(selectUsername);
  const { data: profile } = useGetProfileByUsernameQuery(currentUsername);
  const [FollowProfile] = useFollowUserProfileMutation();
  const [unFollowProfile] = useUnFollowUserProfileMutation();
  const [change, setChange] = useState('');

  let checkFollowings = false;
  profile?.followers?.forEach(data => {
    if (username === data.username) checkFollowings = true;
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
      await FollowProfile(username);
      setChange('1');
      button = 'followings';
    }
    if (button === 'unfollow') {
      await unFollowProfile(username);
      button = 'followings';
    }
  };

  return (
    <div className="flex-box profile-list-item">
      <img className="profile-icon" src={icon} alt="kjsaf"></img>
      <div>
        <h3>{name}</h3>
        <span>{username}</span>
      </div>
      {type === 'others'}
      <button className="profile-item-button" onClick={onClickButton}>
        {button}
      </button>
    </div>
  );
}
