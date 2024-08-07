import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShopPage from "../pages/ShopPage";

const RoutesComponent = () => {
  const token = localStorage.getItem("@TOKEN");

  return (
    <Routes>
      <Route path="/" element={!token && <LoginPage />} />
      <Route path="/register" element={!token && <RegisterPage />} />
      <Route path="/shop" element={<ProtectedRoutes />}>
        <Route index element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
