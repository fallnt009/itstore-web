import {useState} from 'react';

import validateLogin from '../../validators/validate-login';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import useLoading from '../../hooks/useLoading';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const {startLoading, stopLoading} = useLoading();
  const {login} = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin({email, password});

      if (result) {
        setError(result);
      } else {
        setError({});
        startLoading();
        await login(email, password);
        stopLoading();
      }
    } catch (err) {
      //ทำ Notification Box for Error
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmitForm}>
      <Input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        error={error.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        error={error.password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit "
        className="rounded-md border-2 p-2 hover:bg-cerulean-blue-200"
      >
        Log In
      </button>
    </form>
  );
}
