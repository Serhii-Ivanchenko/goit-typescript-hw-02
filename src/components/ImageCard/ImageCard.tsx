import { Image } from '../App/App.types';
import css from './ImageCard.module.css';

interface ImageCardProps {
  item: Image;
  onImageClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onImageClick }) => {
  return (
    <div className={css.thumb}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={onImageClick}
      />
      <ul className={css.descriptionList}>
        <li>
          <p>Photo by: {item.user.name}</p>
        </li>
        <li>
          <p>Likes: {item.likes}</p>
        </li>
      </ul>
    </div>
  );
};
export default ImageCard;
