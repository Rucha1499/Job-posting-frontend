import { useState } from 'react';
import JobCard from '../JobCard';
import styles from './JobsHolder.module.css';
import Modal from '../Modal/modal';
import JobModalOne from '../primaryJobDetails';

const JobsHolder = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div className={styles.mainContaier}>
      {showModal ? (
        <Modal>
          <JobModalOne />
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
                <JobCard key={id} jobTitle={jobTitle} date={date} />
              );
            })}
          </div>
        </div>
      ) }
    </div>
  );
};

export default JobsHolder;
