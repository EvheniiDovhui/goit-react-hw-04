import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoaderComponent from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query.trim() === '') return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=10`,
          {
            headers: {
              Authorization:
                'Client-ID hIfIfpvpDBtGL6YgxIMSCvZPHGq7dN9Kkidzhqkyurc',
            },
          }
        );
        setImages(prevImages => [...prevImages, ...response.data.results]);
      } catch (error) {
        toast.error('Помилка при завантаженні зображень. Спробуйте ще раз.');
      }

      setLoading(false);
    };

    fetchData();
  }, [query, page]);

  const handleSearchSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
        </>
      )}
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
