import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../../Store/index";

function ProtectedRoute() {
  // const isAuthenticated = false;
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const location = useLocation();
  if (isAuthenticated) {
    return location.pathname.includes("/auth/") ? (
      <Navigate to={"/home"} />
    ) : (
      <Outlet />
    );
  } else {
    return location.pathname.includes("/auth/") ? (
      <Outlet />
    ) : (
      <Navigate
        to={"/auth/register"}
        state={{ from: location.pathname }}
        replace
      />
    );
  }
}

export default ProtectedRoute;
