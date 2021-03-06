import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = ({
  title, notification, profile,
}) => (
  <div className={styles.navbarContainer}>
    <div className={styles.rightContent}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.notification}>
        <Image
          src={notification}
          alt="notification icon"
          width={40}
          height={40}
        />
      </div>
      <div className={styles.profile}>
        <Image
          src={profile}
          alt="profile icon"
          width={40}
          height={40}
        />
      </div>
    </div>
  </div>
);
export default Navbar;
