import { Outlet, Navigate } from "react-router-dom";

const AuthRequired = () => {
/*   const isLogged = false;
  if (isLogged === false) return <Navigate to="/login" />; */
  return <Outlet />;
};

export default AuthRequired;
