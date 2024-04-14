import {useState} from 'react';

import validateRegister from '../../validators/validate-register';
import Input from '../../components/Input';
import * as authApi from '../../apis/auth-api';

const initialInput = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);
        setInput(initialInput);
      }
    } catch (err) {
      //ERROR BOX
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmitForm}>
      <Input
        type="text"
        className="rounded-md border-2 p-2"
        placeholder="first name"
        name="firstName"
        value={input.firstName}
        error={error.firstName}
        onChange={handleChangeInput}
      />
      <Input
        type="text"
        className="rounded-md border-2 p-2"
        placeholder="last name"
        name="lastName"
        value={input.lastName}
        error={error.lastName}
        onChange={handleChangeInput}
      />
      <Input
        type="email"
        className="rounded-md border-2 p-2"
        placeholder="email"
        name="email"
        value={input.email}
        error={error.email}
        onChange={handleChangeInput}
      />
      <Input
        type="text"
        className="rounded-md border-2 p-2"
        placeholder="mobile"
        name="mobile"
        value={input.mobile}
        error={error.mobile}
        onChange={handleChangeInput}
      />
      <Input
        type="password"
        className="rounded-md border-2 p-2"
        placeholder="password"
        name="password"
        value={input.password}
        error={error.password}
        onChange={handleChangeInput}
      />
      <Input
        type="password"
        className="rounded-md border-2 p-2"
        placeholder="confirm password"
        name="confirmPassword"
        value={input.confirmPassword}
        error={error.confirmPassword}
        onChange={handleChangeInput}
      />

      <button
        type="submit"
        className="rounded-md border-2 p-2 hover:bg-cerulean-blue-200"
      >
        Register
      </button>
    </form>
  );
}
