import { FC } from 'react';
import { HandleImageClick, Image } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: Image[];
  onImageClick: HandleImageClick;
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li className={css.galleryItem} key={item.id}>
          <ImageCard
            item={item}
            onImageClick={() =>
              onImageClick(item.urls.regular, item.alt_description)
            }
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
