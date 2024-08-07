import { iProviderProps } from "./@types";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./userContext";

export const Providers = ({ children }: iProviderProps) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
