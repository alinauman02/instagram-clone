import { useState } from 'react';

import './Post.css';
import IconReactSvg from 'assets/icons/react.svg';
import { ProfileListItem, Content, PostActions, Comment, PostComments } from 'components';
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
        <ProfileListItem button="..." name="Ejaz Hussain" icon={IconReactSvg} description="Quaidain"></ProfileListItem>
        <Content
          content={[
            { type: 'img', src: Image1, id: 1 },
            { type: 'img', src: Image3, id: 2 },
            { type: 'img', src: Image2, id: 3 },
            { type: 'img', src: Image4, id: 4 },
            { type: 'img', src: Image5, id: 5 },
            { type: 'img', src: Image6, id: 6 },
            { type: 'img', src: Image1, id: 7 },
            { type: 'img', src: Image3, id: 8 },
            { type: 'img', src: Image2, id: 9 },
          ]}
          changeContent={changeContent}
          currentContentIndex={currentContentIndex}
        />
      </header>
      <footer className="post-footer">
        <PostActions></PostActions>
        <p className="post-description">
          <span className="text-bold">{number} Likes</span>
        </p>
        <p className="post-description">
          <span className="text-bold">{name}</span> has posted this in instagram...<span className="gray">more</span>
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
        <PostComments />
      </footer>
    </div>
  );
}
