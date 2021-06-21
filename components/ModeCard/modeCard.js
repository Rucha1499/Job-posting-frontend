import styles from './ModeCard.module.css';

const ModeCard = ({ modeType, duration }) => (
  <div className={styles.maincontainer}>
    <input type="checkbox" id="mode" />
    <label className={styles.title} htmlFor="mode">
      <p>{modeType}</p>
      <p>{duration}</p>
    </label>
  </div>
);

export default ModeCard;
