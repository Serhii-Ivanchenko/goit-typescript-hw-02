import css from './ImageCard.module.css'

export default function ImageCard({ item, onImageClick }) {

  return (
    <div className={css.thumb}>
      <img className={css.image}
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
}
