/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { formContext } from '../../state/contextProvider';
import styles from './JobModalTwo.module.css';
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.skill}>
          <label>Skills</label>
          <input {...register('skills', { required: true })} />
        </div>
        <div className={styles.mode}>
          <label>Mode</label>
          <label>
            <input type="checkbox" {...register('partTime', { required: false })} />
            Part-time
          </label>
          <label>
            <input type="checkbox" {...register('semiFullTime', { required: false })} />
            Semi Full-time
          </label>
          <label>
            <input type="checkbox" {...register('fullTime', { required: false })} />
            Full-time
          </label>
        </div>
        <div className={styles.stipendRange}>
          <label>Stipend</label>
          <input type="number" {...register('minStipend', { required: true })} />
          <input type="number" {...register('maxStipend', { required: true })} />
        </div>
        <div className={styles.duration}>
          <label>
            Start Date
            {' '}
          </label>
          <input type="date" {...register('startDate', { required: true })} />

          <label>
            Duration
          </label>
          <input type="number" {...register('jobDuration', { required: true })} />

        </div>
        <div className={styles.description}>
          <label>Description</label>
          <input className={styles.input} type="text" {...register('jobDescription', { required: true })} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default JobModalTwo;
