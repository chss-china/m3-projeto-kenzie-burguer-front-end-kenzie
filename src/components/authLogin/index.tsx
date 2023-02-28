import { Outlet, Navigate } from 'react-router-dom';
export function AuthLogin() {
  let myToken = localStorage.getItem('@TokenUserHam');
  return <>{myToken ? <Navigate to='/shop' /> : <Outlet />}</>;
}
