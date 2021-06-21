import { useState } from 'react';
import styles from './JobModalOne.module.css';
import JobModalTwo from '../JobModalTwo';

const JobModalOne = () => {
  const [jobModalTwo, setJobModalTwo] = useState(false);
  const [jobTitle, setJobTitle] = useState();
  const [jobLocation, setJobLocation] = useState();

  // eslint-disable-next-line no-console
  console.log(jobLocation, jobTitle);

  return (
    <div className={styles.mainContainer}>
      {jobModalTwo ? (
        <JobModalTwo toggleDetails={setJobModalTwo} />
      ) : (
        <form>
          <div className={styles.jobDetails}>
            <div className={styles.title}>
              <label className={styles.label} htmlFor="job-title">
                Job Title
                <input className={styles.input} type="text" id="job-title" name="job-title" placeholder="Enter the job title" onChange={(e) => setJobTitle(e.target.value)} />
              </label>
            </div>
            <div className={styles.location}>
              <label className={styles.label} htmlFor="job-location">
                Job Location
                <input className={styles.input} type="text" id="job-location" name="job-location" placeholder="Enter the job location" onChange={(e) => setJobLocation(e.target.value)} />
              </label>
            </div>
          </div>
          <div className={styles.checkbox}>
            <label className={styles.label} htmlFor="job-remote">
              <input className={styles.input} type="checkbox" id="job-remote" name="job-remote" />
              This job is remote
            </label>
          </div>
          <button className={styles.button} type="submit" onClick={() => setJobModalTwo((prevState) => !prevState)}>NEXT</button>
        </form>
      )}
    </div>
  );
};

export default JobModalOne;
