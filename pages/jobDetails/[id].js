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

  const { jobTitle } = job;

  return (
    <div>
      hello
      {' '}
      {jobTitle}

    </div>
  );
};

export default JobDetails;
