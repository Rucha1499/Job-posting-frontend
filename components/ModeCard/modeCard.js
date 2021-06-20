import styles from './ModeCard.module.css';

const ModeCard = ({ modeType, duration }) => (
  <div className={styles.maincontainer}>
    <input type="checkbox" />
    <div className={styles.title}>
      <p>{modeType}</p>
      <p>{duration}</p>
    </div>
  </div>
);

export default ModeCard;
