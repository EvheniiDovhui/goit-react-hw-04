import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { CgCloseO } from 'react-icons/cg';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ imageUrl, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (imageUrl) {
      setModalIsOpen(true);
      openModal();
    }
  }, [imageUrl]);

  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const openModal = () => {
    document.body.style.overflow = 'hidden';
  };

  const restoreScroll = () => {
    document.body.style.overflow = '';
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      onAfterOpen={() => document.addEventListener('keydown', handleKeyDown)}
      onAfterClose={() => {
        document.removeEventListener('keydown', handleKeyDown);
        restoreScroll();
      }}
    >
      <img src={imageUrl} alt="img" className={css.image} />{' '}
      <button onClick={closeModal} className={css.closeButton}>
        <CgCloseO className={css.buttonIcon} />
      </button>{' '}
    </Modal>
  );
};

export default ImageModal;
