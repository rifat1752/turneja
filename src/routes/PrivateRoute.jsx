/* eslint-disable react-hooks/rules-of-hooks */

import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Shared/Loader';

const PrivateRoute = ({children}) => {
const {user, loading}= useAuth();
const location = useLocation();

if(loading) return <Loader></Loader>;
if(user) return children;

   return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>
}

export default PrivateRoute;