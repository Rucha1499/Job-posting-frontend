import { useState, useContext } from 'react';
import { formContext } from '../../state/contextProvider';
import styles from './JobModalOne.module.css';
import JobModalTwo from '../JobModalTwo';

const JobModalOne = () => {
  const { dispatch, formState } = useContext(formContext);

  const { jobLocationContext, jobTitleContext } = formState;
  const [jobModalTwo, setJobModalTwo] = useState(false);
  const [jobTitle, setJobTitle] = useState(jobTitleContext);
  const [jobLocation, setJobLocation] = useState(jobLocationContext);

  const addToFormContext = () => {
    const currentFormData = { jobTitle, jobLocation };
    dispatch({ type: 'UPDATE', payload: currentFormData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToFormContext();
    setJobModalTwo((prevState) => !prevState);
  };

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
                <input
                  className={styles.input}
                  type="text"
                  id="job-title"
                  value={jobTitle}
                  name="job-title"
                  placeholder="Enter the job title"
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className={styles.location}>
              <label className={styles.label} htmlFor="job-location">
                Job Location
                <input
                  className={styles.input}
                  type="text"
                  id="job-location"
                  value={jobLocation}
                  name="job-location"
                  placeholder="Enter the job location"
                  onChange={(e) => setJobLocation(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.checkbox}>
            <label className={styles.label} htmlFor="job-remote">
              <input
                className={styles.input}
                type="checkbox"
                id="job-remote"
                name="job-remote"
              />
              This job is remote
            </label>
          </div>
          <button
            className={styles.button}
            type="submit"
            onClick={handleSubmit}
          >
            NEXT
          </button>
        </form>
      )}
    </div>
  );
};

export default JobModalOne;
