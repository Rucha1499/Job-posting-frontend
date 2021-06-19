import { useState } from 'react';
import styles from './JobModalOne.module.css';
import JobModalTwo from '../JobModalTwo';

const JobModalOne = () => {
  const [jobModalTwo, setJobModalTwo] = useState(false);

  return (
    <div className={styles.mainContainer}>
      {jobModalTwo ? (
        <JobModalTwo toggleDetails={setJobModalTwo} />
      ) : (
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
            <button type="button" onClick={() => setJobModalTwo((prevState) => !prevState)}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobModalOne;
