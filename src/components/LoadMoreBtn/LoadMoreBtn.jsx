import React from 'react';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className="load-more-btn" onClick={onClick}>
      Завантажити ще
    </button>
  );
};

export default LoadMoreBtn;
