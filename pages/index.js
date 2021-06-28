import FormContextProvider from '../state/contextProvider';
import Navbar from '../components/Navbar';
import JobHolder from '../components/JobsHolder';
import styles from '../styles/Home.module.css';
import BASE_API_URL from '../constants';

export const getServerSideProps = async () => {
  const response = await fetch(`${BASE_API_URL}`);
  const data = await response.json();

  return {
    props: { data },
  };
};

const HomePage = ({ data }) => (
  <FormContextProvider>
    <Navbar logo="/logo.png" title="My Listings" notification="/notification.png" profile="/profile.png" />
    <div className={styles.jobsContainer}>
      {data ? <JobHolder data={data} /> : 'Loading jobs...'}
    </div>
  </FormContextProvider>
);

export default HomePage;
