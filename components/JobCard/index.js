import styles from './jobcard.module.css';

const JobCard = ({ jobTitle, date }) => (
  <div className={styles.mainContainer}>
    <p>{jobTitle}</p>
    <p>{date}</p>
    <div className={styles.details}>
      <p>Details</p>
    </div>
  </div>
);

export default JobCard;
