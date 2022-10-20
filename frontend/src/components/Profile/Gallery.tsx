import './Gallery.css';
import { GalleryItem } from 'components';

export function Gallery() {
  return (
    <div className="gallery flex-box">
      <div className="gallery-items">
        <GalleryItem />
      </div>
      <div className="gallery-items">
        <GalleryItem />
      </div>
      <div className="gallery-items">
        <GalleryItem />
      </div>
      <div className="gallery-items">
        <GalleryItem />
      </div>
      <div className="gallery-items">
        <GalleryItem />
      </div>
      <div className="gallery-items">
        <GalleryItem />
      </div>
      <div className="gallery-items">
        <GalleryItem />
      </div>
      
    </div>
  );
}
