import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';

export default function LoginContainer() {
  return (
    <div className="grid grid-cols-2 mt-20 mb-20 text-cerulean-blue-800">
      <div className="grid grid-cols-subgrid p-4 text-center self-center ">
        <div className="block font-extrabold text-5xl font-jetmono text-cerulean-blue-800 ">
          ITStores
        </div>

        <div className="mt-3">
          <p>Welcome all Customers to Our Login Page</p>
        </div>
      </div>
      <div className="grid grid-cols-subgrid p-4 self-center">
        <div className="flex flex-col gap-4 self-center">
          <h1 className="font-semibold text-4xl">Sign In</h1>
          <div className=" w-1/2">
            <LoginForm />
          </div>
          <small>
            new to ITSTORE?{' '}
            <Link to="/register" className="font-semibold">
              Sign Up
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
