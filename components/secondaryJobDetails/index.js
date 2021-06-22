/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { formContext } from '../../state/contextProvider';
import styles from './SecondaryJobDetails.module.css';
import BASE_URL from '../../constants';

const JobModalTwo = ({ toggleDetails }) => {
  const { dispatch, formState } = useContext(formContext);

  const {
    register,
    handleSubmit,
  } = useForm();

  console.log('final body', formState);

  const createJob = () => {
    fetch(`${BASE_URL}/createJob`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((data) => alert(`Job posted ${data}`))
      .catch((err) => { alert(err.message); });
  };

  const onSubmit = (data) => {
    dispatch({ type: 'UPDATE', payload: data });
    console.log('rucha', data);
    createJob();
  };

  return (
    <div>
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
            <input className={styles.stipendMin} placeholder="Minimum stipend" type="number" {...register('minStipend', { required: true })} />
            <input className={styles.stipendMax} placeholder="Maximum stipend" type="number" {...register('maxStipend', { required: true })} />
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
          <input className={styles.month} ntype="number" {...register('jobDuration', { required: true })} />
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

export default JobModalTwo;
