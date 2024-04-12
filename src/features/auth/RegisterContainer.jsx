import {Link} from 'react-router-dom';

import RegisterForm from './RegisterForm';

export default function RegisterContainer() {
  return (
    <div className="flex flex-row mt-20 mb-20 text-cerulean-blue-800">
      <div className="flex-1 p-4 text-center self-center ">
        <div className="block font-extrabold text-5xl font-jetmono text-cerulean-blue-800 ">
          ITStores
        </div>

        <div className="mt-3">
          <p>Welcome all Customers to be Our family</p>
        </div>
      </div>
      <div className="flex-1 p-4 self-center">
        <div className="flex flex-col gap-4 self-center">
          <h1 className="font-semibold text-4xl">Register</h1>
          <div className=" w-1/2">
            <RegisterForm />
          </div>
          <small>
            Already have an account?{' '}
            <Link to="/login" className="font-semibold">
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
