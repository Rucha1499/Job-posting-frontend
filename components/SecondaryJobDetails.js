/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { formContext } from '../state/contextProvider';
import styles from './SecondaryJobDetails.module.css';
import BASE_URL from '../constants';

const SecondaryJobDetails = ({ toggleDetails }) => {
  const { dispatch, formState } = useContext(formContext);

  const {
    register,
    handleSubmit,
  } = useForm();

  const createJob = (body) => {
    fetch(`${BASE_URL}/createJob`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      // eslint-disable-next-line no-unused-vars
      .then((data) => alert('Job posted!'))
      .catch((err) => { alert(err.message); });
  };

  const onSubmit = (data) => {
    dispatch({ type: 'UPDATE', payload: data });
    const body = { ...formState, ...data };
    createJob(body);
  };

  return (
    <div className={styles.jobDetails}>
      <div className={styles.header}>
        <div className={styles.backArrow} role="button" tabIndex={0} onKeyDown={() => toggleDetails((prevState) => !prevState)} onClick={() => toggleDetails((prevState) => !prevState)}>
          <Image
            src="/backArrow.png"
            alt="back arrow"
            height={10}
            width={15}
          />
        </div>
        <p className={styles.title}>Job Details</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.skills}>
          <label>Skills</label>
          <input className={styles.inputSkills} {...register('skills', { required: true })} />
        </div>
        <div className={styles.mode}>
          <label>Mode</label>
          <div className={styles.modeInputs}>
            <label>
              <input className={styles.modeType} type="checkbox" {...register('partTime', { required: false })} />
              Part-time
            </label>
            <label>
              <input className={styles.modeType} type="checkbox" {...register('semiFullTime', { required: false })} />
              Semi Full-time
            </label>
            <label>
              <input className={styles.modeType} type="checkbox" {...register('fullTime', { required: false })} />
              Full-time
            </label>
          </div>
        </div>
        <div className={styles.stipendRange}>
          <label>Stipend Range</label>
          <div className={styles.stipend}>
            <input className={styles.stipendMin} placeholder="Minimum stipend" min="0" type="number" {...register('minStipend', { required: true })} />
            <input className={styles.stipendMax} placeholder="Maximum stipend" min="0" type="number" {...register('maxStipend', { required: true })} />
          </div>
        </div>
        <div className={styles.duration}>
          <label>
            Start Date
            {' '}
          </label>
          <input className={styles.date} type="date" {...register('startDate', { required: true })} />

          <label>
            Duration
          </label>
          <input className={styles.month} min="1" max="12" type="number" {...register('jobDuration', { required: true })} />
          <label>
            Months
          </label>

        </div>
        <div className={styles.description}>
          <label>Description</label>
          <textarea placeholder="Enter the job description" className={styles.text} type="text" {...register('jobDescription', { required: true })} />
        </div>
        <div className={styles.submitButton}>
          <input className={styles.button} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SecondaryJobDetails;
