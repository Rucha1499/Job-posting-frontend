import styles from './jobcard.module.css';

const JobCard = ({ jobTitle, date }) => (
  <div className={styles.mainContainer}>
    <p className={styles.content}>{jobTitle}</p>
    <p className={styles.content}>{date}</p>
    <div className={styles.details}>
      <button type="button" className={styles.button}>Details</button>
    </div>
  </div>
);

export default JobCard;
