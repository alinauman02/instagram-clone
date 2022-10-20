import './Gallery.css';
import { GalleryItem } from 'components';
import ProfilePic from 'assets/images/profile.jpeg';
import Image1 from 'assets/images/image1.jpg';
import Image2 from 'assets/images/image2.jpg';
import Image3 from 'assets/images/image3.jpg';
import Image4 from 'assets/images/image4.jpg';
import Image5 from 'assets/images/image5.jpg';
import Image6 from 'assets/images/image6.jpg';
import Image7 from 'assets/images/image7.jpg';
import Image8 from 'assets/images/image8.jpg';
import Image9 from 'assets/images/image9.jpg';
import Image10 from 'assets/images/image10.jpg';

export function Gallery() {
  return (
    <div className="gallery flex-box">
      <div className="gallery-items">
        <GalleryItem src={Image1} type="img" />
      </div>
      <div className="gallery-items">
        <GalleryItem src={Image2} type="img" />
      </div>
      <div className="gallery-items">
        <GalleryItem src={Image3} type="img" />
      </div>
      <div className="gallery-items">
        <GalleryItem src={Image4} type="img" />
      </div>
      <div className="gallery-items">
        <GalleryItem src={Image5} type="img" />
      </div>
      <div className="gallery-items">
        <GalleryItem src={Image6} type="img" />
      </div>
      <div className="gallery-items">
        <GalleryItem src={Image7} type="img" />
      </div>
    </div>
  );
}
