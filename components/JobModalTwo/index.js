/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styles from './JobModalTwo.module.css';

const JobModalTwo = ({ toggleDetails }) => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
            <input type="checkbox" {...register('PartTime', { required: false })} />
            Part-time
          </label>
          <label>
            <input type="checkbox" {...register('SemiFullTime', { required: false })} />
            Semi Full-time
          </label>
          <label>
            <input type="checkbox" {...register('FullTime', { required: false })} />
            Full-time
          </label>
        </div>
        <div className={styles.stipendRange}>
          <label>Stipend</label>
          <input type="number" {...register('minStipendRange', { required: true })} />
          <input type="number" {...register('maxStipendRange', { required: true })} />
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
          <input type="number" {...register('duration', { required: true })} />

        </div>
        <div className={styles.description}>
          <label>Description</label>
          <textarea className={styles.input} type="text" {...register('description', { required: true })} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default JobModalTwo;
