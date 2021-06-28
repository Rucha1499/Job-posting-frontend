import DisplayJobDetails from '../../components/DisplayJobDetails';
import Navbar from '../../components/Navbar';
import BASE_API_URL from '../../constants';

export const getServerSideProps = async (context) => {
  const response = await fetch(`${BASE_API_URL}/${context.params.id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const JobDetails = (data) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { job } = data.data;

  const {
    jobTitle,
    jobLocation,
    isRemote,
    skills,
    partTime,
    semiFullTime,
    fullTime,
    startDate,
    jobDuration,
    minStipend,
    maxStipend,
    jobDescription,
  } = job;

  return (
    <div>
      <Navbar title="My Listings" notification="/notification.png" profile="/profile.png" />
      <DisplayJobDetails
        jobTitle={jobTitle}
        jobLocation={jobLocation}
        isRemote={isRemote}
        skills={skills}
        partTime={partTime}
        semiFullTime={semiFullTime}
        fullTime={fullTime}
        startDate={startDate}
        jobDuration={jobDuration}
        minStipend={minStipend}
        maxStipend={maxStipend}
        jobDescription={jobDescription}
      />
    </div>
  );
};

export default JobDetails;
