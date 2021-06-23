import { useState } from 'react';
import JobCard from './JobCard';
import Modal from './Modal';
import PrimaryJobDetails from './PrimaryJobDetails';
import styles from './JobsHolder.module.css';

const JobsHolder = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className={styles.mainContainer}>
      {showModal ? (
        <Modal>
          <PrimaryJobDetails />
        </Modal>
      ) : (
        <div className={styles.jobContainer}>
          <div className={styles.addNewJob}>
            <button type="button" onClick={toggleModalHandler} className={styles.button}>+ Add another job</button>
          </div>
          <div className={styles.jobs}>
            {data.map((job) => {
              const { id, jobTitle, date } = job;
              return (
                <JobCard key={id} data={job} jobTitle={jobTitle} date={date} />
              );
            })}
          </div>
        </div>
      ) }
    </div>
  );
};

export default JobsHolder;
