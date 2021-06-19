import styles from './JobModalOne.module.css';

const JobModalOne = () => (
  <div className={styles.mainContainer}>
    <div className={styles.jobTitle}>
      <p>Job Title</p>
      <div className={styles.input}>
        <input type="text" placeholder="Enter the job title" />
      </div>
      <div className={styles.input}>
        <input type="text" placeholder="Enter the job location" />
        <input type="checkbox" placeholder="This job is remote" />
      </div>
      <div className={styles.button}>
        <button type="button">Next</button>
      </div>
    </div>
  </div>
);

export default JobModalOne;
