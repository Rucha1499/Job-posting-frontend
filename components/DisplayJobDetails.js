import styles from './DisplayJobDetails.module.css';

const DisplayJobDetails = ({
  jobTitle,
  jobLocation,
  isRemote,
  skills,
  partTime,
  semiFullTime,
  fullTime,
  startDate,
  jobDuration,
  minStipend,
  maxStipend,
  jobDescription,
}) => (
  <p className={styles.mainContainer}>
    <p className={styles.title}>
      JOB DETAILS
    </p>
    <p className={styles.jobTitle}>
      Job title :
      {' '}
      {jobTitle}
    </p>
    <p className={styles.jobLocation}>
      Job Location :
      {' '}
      {isRemote ? 'Remote Job' : jobLocation }
    </p>
    <p className={styles.skills}>
      Skills :
      {' '}
      {skills}
    </p>
    <p className={styles.jobDescription}>
      Job Description :
      {' '}
      {jobDescription}
    </p>
    <p className={styles.mode}>
      Available modes :
      {' '}
      {fullTime && '⌚ Full-time'}
      {' '}
      {semiFullTime && '⌚ Semi Full-time'}
      {' '}
      {partTime && '⌚ Part-time'}
    </p>
    <p className={styles.startDate}>
      Start from :
      {' '}
      {startDate}
    </p>
    <p className={styles.jobDuration}>
      Duration :
      {' '}
      {jobDuration}
      {' '}
      Months
    </p>
    <p className={styles.stipend}>
      Stipend : Rs
      {' '}
      {minStipend}
      {' '}
      -
      {maxStipend}
    </p>
  </p>
);

export default DisplayJobDetails;
