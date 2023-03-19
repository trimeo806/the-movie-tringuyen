import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingScreen from "../components/LoadingScreen";

function AuthRequire({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();
  const location = useLocation();
  // console.log(location);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    // return <Navigate to="/login" state={{ from: location }} replace />;
    //Cho nay can phai co return moi navigate duoc page login con khong thi no tu ra children la Homepage
    return (
      <Navigate
        to="/login"
        state={{ from: location, name: location.state?.name }}
        replace
      />
    );
  }

  return (
    <>
      {children}
      <Outlet></Outlet>
    </>
  );
}

export default AuthRequire;
