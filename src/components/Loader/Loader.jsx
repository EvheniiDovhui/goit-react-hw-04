import React from 'react';
import { Audio } from 'react-loader-spinner';

const LoaderComponent = () => {
  return (
    <div className="loader">
      <Audio type="Oval" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default LoaderComponent;
