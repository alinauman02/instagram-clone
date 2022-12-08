import { ProfileListsItem } from 'components';
import { FollowProfile } from 'models/follow-profile';
import './ProfileList.css';

interface ProfileListProps {
  type: 'self' | 'others';
  profileLists: FollowProfile[];
  list: 'followings' | 'followers';
}

export function ProfileList({ profileLists, type, list }: ProfileListProps) {
  return (
    <div className="profile-list-background">
      <div className="profile-list">
        <>
          <div className="profile-list-header">{list}</div>
          {profileLists.map(({ name, username }) => (
            <ProfileListsItem
              key={username}
              name={name}
              username={username}
              src={''}
              button="Remove"
              type={type}
              list={list}
            />
          ))}
        </>
      </div>
    </div>
  );
}
