/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useContext } from 'react';
import { formContext } from '../state/contextProvider';
import styles from './PrimaryJobDetails.module.css';
import SecondaryJobDetails from './SecondaryJobDetails';

const PrimaryJobDetails = () => {
  const { dispatch, formState } = useContext(formContext);

  const { jobLocationContext, jobTitleContext } = formState;
  const [jobModalTwo, setJobModalTwo] = useState(false);
  const [jobTitle, setJobTitle] = useState(jobTitleContext);
  const [jobLocation, setJobLocation] = useState(jobLocationContext);
  const [isRemote, setIsRemote] = useState(false);

  const addToFormContext = () => {
    const currentFormData = { jobTitle, jobLocation, isRemote };
    if (!currentFormData.jobLocation) {
      delete currentFormData.jobLocation;
    }
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
        <SecondaryJobDetails toggleDetails={setJobModalTwo} />
      ) : (
        <form>
          <div className={styles.jobDetails}>
            <div className={styles.title}>
              <label className={styles.label} htmlFor="job-title">
                Job Title
              </label>
              <input
                className={styles.jobTitleInput}
                type="text"
                id="job-title"
                value={jobTitle}
                name="job-title"
                placeholder="Enter the job title"
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>
            <div className={styles.locationDetails}>
              <div className={styles.location}>
                <label className={styles.label} htmlFor="job-location">
                  Job Location
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="job-location"
                  value={jobLocation}
                  name="job-location"
                  placeholder="Enter the job location"
                  onChange={(e) => setJobLocation(e.target.value)}
                  required
                  disabled={isRemote}
                />
              </div>
              <div className={styles.checkbox}>
                <label className={styles.label} htmlFor="job-remote">
                  <input
                    className={styles.remote}
                    type="checkbox"
                    id="job-remote"
                    value={isRemote}
                    name="job-remote"
                    onChange={() => setIsRemote((prevState) => !(prevState))}
                  />
                  This job is remote
                </label>
              </div>
            </div>
          </div>
          <div className={styles.submitButton}>
            <button
              className={styles.button}
              type="submit"
              onClick={handleSubmit}
            >
              NEXT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PrimaryJobDetails;
