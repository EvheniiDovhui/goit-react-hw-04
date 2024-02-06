const ImageCard = ({ image }) => {
  return (
    <>
      <img src={image.url} alt={image.alt} />
    </>
  );
};

export default ImageCard;
