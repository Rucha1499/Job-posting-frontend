import styles from './DisplayJobDetails.module.css';

const DisplayJobDetails = (data) => {
  const {
    fullTime,
    isRemote,
    jobDescription,
    jobDuration,
    jobLocation,
    jobTitle,
    maxStipend,
    minStipend,
    partTime,
    semiFullTime,
    skills,
    startDate,
  // eslint-disable-next-line react/destructuring-assignment
  } = data.data;

  return (
    <div>

      { data ? (
        <div className={styles.mainContainer}>
          <div className={styles.jobDetails}>
            <p>
              Position :
              {jobTitle}
            </p>
            <p>
              {isRemote ? 'Remote' : jobLocation}
            </p>
          </div>
          <p>
            Skills Required :
            {skills}
          </p>
          <div className={styles.mode}>
            {fullTime && 'Full-time'}
            {semiFullTime && 'Semi Full-time'}
            {partTime && 'Part-time'}
          </div>
          <p>
            Stipend : Rs.
            {' '}
            {minStipend}
            {' '}
            -
            {' '}
            {maxStipend}
          </p>
          <p>
            Job Duration :
            {' '}
            {jobDuration}
            {' '}
            Months
          </p>
          <p>
            Start date :
            {' '}
            {startDate}
          </p>
          <p>
            Job Description :
            {jobDescription}
          </p>
        </div>
      ) : 'No details found'}
    </div>
  );
};

export default DisplayJobDetails;
