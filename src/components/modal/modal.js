import React from "react";
import PropTypes from 'prop-types';
import "./modal.scss";

const Modal = ({
  title,
  isOpen,
  onCancel,
  onSubmit,
  children
}) => {

  return (
    <>
      {
        isOpen &&
        <div className="modal-overlay" onClick={onCancel}>
          <div className={isOpen ? "modal active" : "modal"} onClick={ev => ev.stopPropagation()}>
            <div className="modal__header">
              <div className="modal__title">{title}</div>
              <div className="modal__icon-close" onClick={onCancel}>&times;</div>
            </div>
            <div className="modal__content">
              {children}
            </div>
            <div className="modal__footer">
              <button className="modal__btn modal__btn_sub" onClick={onSubmit}>Подтвердить</button>
              <button className="modal__btn modal__btn_den" onClick={onCancel}>Отменить</button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
}

Modal.defaultProps = {
  title: "Modal Title",
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
}

export default Modal;