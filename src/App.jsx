import {ToastContainer} from 'react-toastify';
import Spinner from './components/Spinner';
import useLoading from './hooks/useLoading';

import Router from './routes/Router';

function App() {
  const {loading} = useLoading();
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="top-right" />
    </>
  );
}

export default App;
