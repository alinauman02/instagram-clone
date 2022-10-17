import './Content.css';

interface Content {
  type: 'img' | 'video';
  src: string;
}

interface ContentProps {
  content: Content[];
}

export function Content({ content }: ContentProps) {
  return;

  {
    content.map(C => {
      return C.type == 'img' ? <img src={C.src} alt="eakjf"></img> : <div>not supported</div>;
    });
  }
  <div className="content">Content</div>;
}
