import FormContextProvider from '../state/contextProvider';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import PrimaryJobDetails from '../components/PrimaryJobDetails';

const AddJob = () => (
  <FormContextProvider>
    <Navbar title="Job Posting Portal" notification="/notification.png" profile="/profile.png" />
    {' '}
    <Modal>
      <PrimaryJobDetails />
    </Modal>
  </FormContextProvider>

);

export default AddJob;
