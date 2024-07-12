import ReactModal from 'react-modal';
import css from './ImageModal.module.css'

export default function ImageModal({ isOpen, onClose, url, description }) {
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
