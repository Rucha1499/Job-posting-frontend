import Link from 'next/link';
import JobCard from './JobCard';
import styles from './JobsHolder.module.css';

const JobsHolder = ({ data }) => (
  <div className={styles.jobContainer}>
    <div className={styles.addNewJob}>
      <Link href="/addJob">
        <button type="button" className={styles.button}>+ Add another job</button>
      </Link>
    </div>
    <div className={styles.jobs}>
      {data.map((job) => {
        const { id, jobTitle, date } = job;
        return (
          <JobCard key={id} id={id} jobTitle={jobTitle} date={date} />
        );
      })}
    </div>
  </div>
);

export default JobsHolder;
