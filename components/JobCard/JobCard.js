import styles from './Jobcard.module.css';

const JobCard = ({ jobTitle, date }) => {
  const newDate = new Date(date);
  const displayDate = newDate.toLocaleDateString('en-GB');

  return (
    <div className={styles.mainContainer}>
      <p className={styles.title}>{jobTitle}</p>
      <p className={styles.date}>{displayDate}</p>
      <div className={styles.details}>
        <button type="button" className={styles.button}>Details</button>
      </div>
    </div>
  );
};

export default JobCard;
