import { useState } from 'react';

import './Content.css';
import { ReactComponent as NextIcon } from './../../assets/next-icon.svg';
import { ReactComponent as BackIcon } from './../../assets/back-icon.svg';

interface Content {
  type: 'img' | 'video';
  src: string;
}

interface ContentProps {
  content: Content[];
}

export function Content({ content }: ContentProps) {
  const [index, setIndex] = useState(0);

  const nextContent = () => {
    setIndex(id => id + 1);
  };

  const backContent = () => {
    setIndex(index => index - 1);
  };

  return content[index].type == 'img' ? (
    <div className="content">
      <img className="content-img" src={content[index].src} alt="eakjf"></img>
      {index < content.length - 1 && (
        <button onClick={nextContent} className="content-right-button">
          <NextIcon />
        </button>
      )}
      {index > 0 && (
        <button className="content-left-button" onClick={backContent}>
          <BackIcon />
        </button>
      )}
    </div>
  ) : (
    <div>not supported</div>
  );
}
