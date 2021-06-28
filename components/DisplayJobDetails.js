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
  <div className={styles.mainContainer}>
    <div className={styles.jobTitle}>
      Job title :
      {' '}
      {jobTitle}
    </div>
    <div className={styles.jobLocation}>
      {isRemote ? 'Remote Job' : jobLocation }
    </div>
    <div className={styles.skills}>
      Skill required :
      {' '}
      {skills}
    </div>
    <div className={styles.jobDescription}>
      {jobDescription}
    </div>
    <div className={styles.mode}>
      Available modes :
      {fullTime && 'Full-time'}
      {semiFullTime && 'Semi Full-time'}
      {partTime && 'Part-time'}
    </div>
    <div className={styles.startDate}>
      Start from
      {' '}
      {startDate}
    </div>
    <div className={styles.jobDuration}>
      Duration :
      {' '}
      {jobDuration}
    </div>
    <div className={styles.stipend}>
      Stipend :
      {' '}
      {minStipend}
      {' '}
      -
      {maxStipend}
    </div>
  </div>
);

export default DisplayJobDetails;
