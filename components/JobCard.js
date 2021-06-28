import Link from 'next/link';
import styles from './Jobcard.module.css';

const JobCard = ({ jobTitle, date, id }) => {
  const newDate = new Date(date);
  const displayDate = newDate.toLocaleDateString('en-GB');

  return (
    <div className={styles.mainContainer}>
      <p className={styles.title}>{jobTitle}</p>
      <p className={styles.date}>{displayDate}</p>
      <div className={styles.details}>
        <Link href={`/jobDetails/${id}`}>
          <button type="button" className={styles.button}>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
