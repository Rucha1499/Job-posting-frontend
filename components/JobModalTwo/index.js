import Image from 'next/image';
import styles from './JobModalTwo.module.css';

const JobModalTwo = ({ toggleDetails }) => (
  <div className={styles.mainContainer}>
    <div className={styles.header}>
      <div className={styles.backArrow} role="button" tabIndex={0} onKeyDown={() => toggleDetails((prevState) => !prevState)} onClick={() => toggleDetails((prevState) => !prevState)}>
        <Image
          src="/backArrow.png"
          alt="back arrow"
          height={10}
          width={15}
        />
      </div>
      <p className={styles.title}># Intern Details</p>
    </div>
    <div className={styles.skill}>
      <p>Skills</p>
      <input type="text" placeholder="start typing and enter tab" />
    </div>
    <div className={styles.mode}>
      <p>Mode</p>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </div>
    <div className={styles.stipendRange}>
      <p>Stipend Range</p>
      <input type="number" placeholder="lower limit" />
      <input type="number" placeholder="Upper limit" />
    </div>
    <div className={styles.duration}>
      <p>Start Date</p>
      <input type="date" placeholder="dd/mm/yyyy" />
      <p>Duration</p>
      <input type="number" />
      <p>months</p>
    </div>
    <div className={styles.description}>
      <p>Job Description</p>
      <input type="text" placeholder="Description of job" />
    </div>
    <div className={styles.button}>
      <button type="submit">Post</button>
    </div>
  </div>
);

export default JobModalTwo;
