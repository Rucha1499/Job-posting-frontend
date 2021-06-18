import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import JobHolder from '../components/JobsHolder';
import BASE_API_URL from '../constants';

export const getServerSideProps = async () => {
  const response = await fetch(`${BASE_API_URL}`);
  const data = await response.json();

  return { props: { data } };
};

const HomePage = ({ data }) => (
  <div>
    <Navbar logo="/logo.png" title="My Listings" notification="/notification.png" profile="/profile.png" />
    <div className={styles.jobsContainer}>
      {data ? <JobHolder data={data} /> : 'Loading jobs...'}
    </div>
  </div>
);

export default HomePage;
