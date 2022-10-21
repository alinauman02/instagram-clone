import { useState } from 'react';

import './Post.css';

import reactSvg from 'assets/icons/react.svg';
import { ProfileListItem, Content, PostActions, Comment } from 'components';
import { ReactComponent as CommentEmoji } from 'assets/icons/comment-emoji.svg';
import Image1 from 'assets/images/image1.jpg';
import Image2 from 'assets/images/image2.jpg';
import Image3 from 'assets/images/image3.jpg';
import Image4 from 'assets/images/image4.jpg';
import Image5 from 'assets/images/image5.jpg';
import Image6 from 'assets/images/image6.jpg';

interface PostProps {
  name: string;
  number: number;
}
export function Post({ name, number }: PostProps) {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const changeContent = (num: number) => {
    setCurrentContentIndex(id => id + num);
  };

  return (
    <div className="post-card">
      <header>
        <ProfileListItem button="..." name="Ejaz Hussain" icon={reactSvg} description="Quaidain"></ProfileListItem>
        <Content
          content={[
            { type: 'img', src: Image1 },
            { type: 'img', src: Image3 },
            { type: 'img', src: Image2 },
            { type: 'img', src: Image4 },
            { type: 'img', src: Image5 },
            { type: 'img', src: Image6 },
            { type: 'img', src: Image1 },
            { type: 'img', src: Image3 },
            { type: 'img', src: Image2 },
          ]}
          changeContent={changeContent}
          currentContentIndex={currentContentIndex}
        />
      </header>
      <footer className="post-footer">
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
          <span className="post-time gray">13 HOURS AGO</span>
        </p>
        <div>
          <Comment />
        </div>
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
