import React, { useEffect } from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  // При монтуванні компонента встановлюємо обробник клавіші ESC
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <img src={imageUrl} alt="Full size" />
      <button onClick={onClose}>Закрити</button>
    </Modal>
  );
};

export default ImageModal;
