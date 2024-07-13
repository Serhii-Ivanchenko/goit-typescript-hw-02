import ReactModal from 'react-modal';
import css from './ImageModal.module.css'
import { HandleModalClose, Modal } from '../App/App.types';
import { FC } from 'react';

interface ImageModalProps {
  isOpen: Modal['isOpen'];
  url: Modal['url'];
  description: Modal['description'];
  onClose: HandleModalClose;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, url, description }) => {
  return (
    <ReactModal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <img className={css.image} src={url} alt={description} />
    </ReactModal>
  );
}

export default ImageModal;