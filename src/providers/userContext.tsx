import { createContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { api } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { iProviderProps, iRequestError } from "./@types";
import { iRegisterFormValues } from "../pages/RegisterPage/FormRegister";
import { iLoginFormValues } from "../pages/LoginPage/FormLogin";
import { iSearchValues } from "../components/Header";
import { toast } from "react-toastify";

interface iUserContext {
  registerUser: (
    formData: iRegisterFormValues,
    setLoadingRegister: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogin: (
    formData: iLoginFormValues,
    setLoadingLogin: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogout: () => void;
  globalLoading: boolean;
  products: iProducts[] | null;
  filteredProducts: iProducts[] | null;
  filterProducts: (formData: iSearchValues) => void;
}

interface iUser {
  id: number;
  name: string;
  email: string;
}

interface iLoginResponse {
  user: iUser;
  accessToken: string;
}

interface iRegisterResponse {
  statusText: string;
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity?: number;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [products, setProducts] = useState([] as iProducts[] | null);
  const [filteredProducts, setFilteredProducts] = useState(
    [] as iProducts[] | null
  );
  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  async function registerUser(
    formData: iRegisterFormValues,
    setLoadingRegister: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoadingRegister(true);
      await api.post<iRegisterResponse>("users", formData);
      toast.success("Sua conta foi criada com sucesso!");
      navigate("/");
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      if (typeof currentError.response?.data === "string") {
        toast.error(currentError.response?.data);
      }
    } finally {
      setLoadingRegister(false);
    }
  }

  async function userLogin(
    formData: iLoginFormValues,
    setLoadingLogin: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoadingLogin(true);
      const response = await api.post<iLoginResponse>("login", formData);
      toast.success("Login bem sucedido!");
      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USER", JSON.stringify(response.data.user));

      api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
      const toNavigate = location.state?.from?.pathname || "shop";
      navigate(toNavigate, { replace: true });
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      if (typeof currentError.response?.data === "string") {
        toast.error(currentError.response?.data);
      }
    } finally {
      setLoadingLogin(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    (async () => {
      if (token) {
        try {
          setGlobalLoading(true);
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const response = await api.get<iProducts[] | null>("products");
          setProducts(response.data);
          setFilteredProducts(response.data);

          navigate("shop");
        } catch (error) {
          const currentError = error as AxiosError<iRequestError>;
          if (typeof currentError.response?.data === "string") {
            toast.error(currentError.response?.data);
          }
          localStorage.clear();
          setProducts(null);
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    localStorage.removeItem("@CURRENT-CART");
    setProducts(null);
    setFilteredProducts(null);
    setUser(null);
    navigate("/");
  }

  function filterProducts(formData: iSearchValues) {
    if (formData.searchProduct === "") {
      setFilteredProducts(products);
    } else {
      // eslint-disable-next-line array-callback-return
      const filteredItems = products?.filter((product) => {
        if (
          product.name
            .toLowerCase()
            .includes(formData.searchProduct.trim().toLowerCase()) ||
          product.category
            .toLowerCase()
            .includes(formData.searchProduct.trim().toLowerCase())
        ) {
          return product;
        }
        /* return product.name.toLowerCase().includes(searchProduct.trim().toLowerCase()) */
      });
      setFilteredProducts(filteredItems!);
    }
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        userLogin,
        userLogout,
        globalLoading,
        products,
        filteredProducts,
        filterProducts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
