import {createContext, useState, useEffect} from 'react';
import {jwtDecode} from 'jwt-decode';

import * as authApi from '../apis/auth-api';

import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../utils/local-storage';

const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [authenUser, setAuthenUser] = useState(getAccessToken() ? true : null);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMyProfile();
        setAuthenUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({email, password});
    setAccessToken(res.data.accessToken);
    setAuthenUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenUser(null);
  };

  const updateProfile = (data) => {
    setAuthenUser({...authenUser, ...data});
  };

  return (
    <AuthContext.Provider value={{authenUser, login, logout, updateProfile}}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext};
