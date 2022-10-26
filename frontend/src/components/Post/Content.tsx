import './Content.css';
import { ReactComponent as IconNext } from 'assets/icons/next-icon.svg';
import { ReactComponent as IconBack } from 'assets/icons/back-icon.svg';

interface Content {
  type: 'img' | 'video';
  src: string;
  id: number;
}

interface ContentProps {
  content: Content[];
  currentContentIndex: number;
  changeContent: (num: number) => void;
}

export function Content({ content, currentContentIndex, changeContent }: ContentProps) {
  return content[currentContentIndex].type == 'img' ? (
    <div className="content">
      <img className="content-img" src={content[currentContentIndex].src} alt="eakjf"></img>

      <div className="flex-box content-dots">
        {content.map((item, itemIndex) => {
          const dotStyle = itemIndex === currentContentIndex ? 'content-dot-item' : 'content-dot-item inactive-dot';
          return <div className={dotStyle} key={item.id}></div>;
        })}
      </div>

      {currentContentIndex < content.length - 1 && (
        <button onClick={() => changeContent(1)} className="content-right-button">
          <IconNext />
        </button>
      )}
      {currentContentIndex > 0 && (
        <button className="content-left-button" onClick={() => changeContent(-1)}>
          <IconBack />
        </button>
      )}
    </div>
  ) : (
    <div>not supported</div>
  );
}
