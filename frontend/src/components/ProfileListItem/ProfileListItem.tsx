import './ProfileListItem.css';

interface PorfileListItemProps {
  name: string;
  description: string;
  icon: string;
  button: string;
  OnClick?: () => void;
}

export function ProfileListItem({ name, description, icon, button }: PorfileListItemProps) {
  return (
    <div className="flex-box profile-list-item">
      <img className="profile-icon" src={icon} alt="kjsaf"></img>
      <div>
        <h3>{name}</h3>
        <span>{description}</span>
      </div>
      <div className="profile-item-button">{button}</div>
    </div>
  );
}
