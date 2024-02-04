import css from './ImageGallery.module.css';
const ImageGallery = ({ images }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className="image-gallery">
      {images.map(image => (
        <li key={image.id}>
          <div className={css.li}>
            <img
              className={css.img}
              src={image.urls.regular}
              alt={image.alt_description}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
