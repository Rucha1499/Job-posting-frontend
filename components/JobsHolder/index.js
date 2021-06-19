import JobCard from '../JobCard';
import styles from './JobsHolder.module.css';

const JobsHolder = ({ data }) => (
  <div className={styles.mainContainer}>
    <div className={styles.addNewJob}>
      <button type="button" className={styles.button}>+ Add another job</button>
    </div>
    <div className={styles.jobs}>
      {data.map((job) => {
        const { id, jobTitle, date } = job;
        return (
          <div className={styles.jobDisplay}>
            <JobCard key={id} jobTitle={jobTitle} date={date} />
          </div>
        );
      })}
    </div>
  </div>
);

export default JobsHolder;
