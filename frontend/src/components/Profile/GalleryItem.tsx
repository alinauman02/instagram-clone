import './GalleryItem.css';

interface GalleryItemProps {
  type: 'img' | 'video';
  src: string;
}

export function GalleryItem({ type, src }: GalleryItemProps) {
  return (
    <div>
      {type === 'img' && (
        <div className="gallery-item">
          <img className="gallery-item-img" src={src} alt="123"></img>
        </div>
      )}
    </div>
  );
}
