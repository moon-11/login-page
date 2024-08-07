import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/userContext";

export interface iProtectRoute {
  children: React.ReactNode;
}

export function ProtectedRoutes() {
  const { products } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return products ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
}
