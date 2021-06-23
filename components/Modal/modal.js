import styles from './modal.module.css';

const Modal = ({ children }) => (
  <div className={styles.modalContainer}>
    {children}
  </div>
);

export default Modal;
