import './Post.css';

import reactSvg from './../../assets/react.svg';
import reactSvg1 from './../../assets/next-icon.svg';
import { ProfileListItem, Content, PostActions } from 'components';
import { ReactComponent as CommentEmoji } from './../../assets/comment-emoji.svg';
interface PostProps {
  name: string;
  number: number;
}
export function Post({ name, number }: PostProps) {
  return (
    <div className="post-card">
      <header>
        <ProfileListItem button="..." name="EJaz" icon={reactSvg} description="Quaidain"></ProfileListItem>
        <Content
          content={[
            { type: 'img', src: reactSvg },
            { type: 'img', src: reactSvg1 },
            { type: 'img', src: reactSvg },
          ]}
        />
      </header>
      <footer>
        <PostActions></PostActions>
        <p className="post-description">
          <span className="bold">{number} Likes</span>
        </p>
        <p className="post-description">
          <span className="bold">{name}</span> has posted this in instagram...<span className="gray">more</span>
        </p>
        <p className="post-description">
          <span className="gray">View all 40 comments</span>
        </p>
        <p className="post-description post-time">
          <span className="gray">13 HOURS AGO</span>
        </p>
        <form className="flex-box comment-form">
          <div className="comment-emoji">
            <CommentEmoji />
          </div>
          <input className="comment-box" type="string" placeholder="Add a comment" />
          <input type="submit" className="post-button" placeholder="post" value="Post" />
        </form>
      </footer>
    </div>
  );
}
