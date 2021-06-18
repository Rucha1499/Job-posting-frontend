import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = ({
  logo, title, notification, profile,
}) => (
  <div className={styles.navbarContainer}>
    <div className={styles.logo}>
      <Image
        src={logo}
        alt="Logo"
        width={120}
        height={40}
      />
    </div>
    <div className={styles.rightContent}>
      <h3>{title}</h3>
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
