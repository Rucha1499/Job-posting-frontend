import Image from 'next/image';
import styles from './JobModalTwo.module.css';
import ModeCard from '../ModeCard/modeCard';

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
      <p className={styles.subTitle}>Skills</p>
      <input className={styles.skillInput} type="text" placeholder="start typing and enter tab" />
    </div>
    <div className={styles.mode}>
      <p className={styles.subTitle}>Mode</p>
      <div className={styles.modeCardHolder}>
        <ModeCard modeType="Part-time" duration="20 hrs/week" />
        <ModeCard modeType="Semi Full-time" duration="30 hrs/week" />
        <ModeCard modeType="Full-time" duration="40 hrs/week" />
      </div>
    </div>
    <div className={styles.stipendRange}>
      <p className={styles.subTitle}>Stipend Range</p>
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
      <textarea className={styles.input} type="text" placeholder="Description of job" />
    </div>
    <div className={styles.button}>
      <button type="submit">Post</button>
    </div>
  </div>
);

export default JobModalTwo;
