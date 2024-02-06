import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className={css.gallery}>
        {images.map(image => (
          <li key={image.id} className={css.galleryItem}>
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className={css.galleryItemImg}
              onClick={() => onImageClick(image.urls.regular)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
