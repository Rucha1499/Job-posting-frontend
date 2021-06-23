import styles from './Modal.module.css';

const Modal = ({ children }) => (
  <div className={styles.modalContainer}>
    {children}
  </div>
);

export default Modal;
