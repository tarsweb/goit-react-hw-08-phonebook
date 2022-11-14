import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal =({onClose, children}) => {

  useEffect(() => {

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        // console.log('Нажали ESC, нужно закрыть модалку');
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      // console.log("нужно закрыть модалку");
      onClose();
    }
  }

  return createPortal(
    <Backdrop className="Overlay" onClick={handleBackdropClick}>
      <ModalContent className="Modal">{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );

}

Modal.propTypes = {
  onClose : PropTypes.func.isRequired
}

export { Modal }