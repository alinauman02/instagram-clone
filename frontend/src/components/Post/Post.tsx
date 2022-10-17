import './Post.css';

import reactSvg from './../../assets/react.svg';
import { ProfileListItem, Content } from 'components';

export function Post() {
  return (
    <div className="post-card">
      <header>
        <ProfileListItem button="..." name="EJaz" icon={reactSvg} description="Quaidain"></ProfileListItem>
        <Content
          content={[
            { type: 'img', src: reactSvg },
            { type: 'img', src: reactSvg },
            { type: 'img', src: reactSvg },
          ]}
        />
      </header>
    </div>
  );
}
