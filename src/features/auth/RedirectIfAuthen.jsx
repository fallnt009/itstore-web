import {Navigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function RedirectIfAuthen({children}) {
  const {authenUser} = useAuth();
  if (authenUser) {
    return <Navigate to={'/'} />;
  }
  return children;
}
