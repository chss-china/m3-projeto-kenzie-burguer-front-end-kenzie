import { Outlet, Navigate } from 'react-router-dom';
export function AuthToken() {
  let myToken = localStorage.getItem('@TokenUserHam');

  return <>{myToken ? <Outlet /> : <Navigate to='/' />}</>;
}
