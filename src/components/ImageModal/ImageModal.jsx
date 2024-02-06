import React, { useEffect } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css'; // імпорт стилів для модального вікна

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
      className={css.modal} // використовуємо стилі для модального вікна
      overlayClassName={css.overlay} // використовуємо стилі для оверлею
    >
      <img src={imageUrl} alt="Full size" className={css.image} />{' '}
      {/* використовуємо стилі для зображення */}
      <button onClick={onClose} className={css.closeButton}>
        Закрити
      </button>{' '}
      {/* використовуємо стилі для кнопки закриття */}
    </Modal>
  );
};

export default ImageModal;
