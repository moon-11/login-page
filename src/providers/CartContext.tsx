import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iProviderProps } from "./@types";

export interface iProductsCart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity?: number;
}

interface iCartContext {
  cartProducts: iProductsCart[] | null;
  cartModal: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
  totalCartItems: number;
  totalCartValue: number;
  addToCart: (product: iProductsCart) => void;
  addFromCart: (product: iProductsCart) => void;
  deductFromCart: (product: iProductsCart) => void;
  removeFromCart: (product: iProductsCart) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iProviderProps) => {
  const [cartProducts, setCartProducts] = useState([] as iProductsCart[]);
  const [cartModal, setCartModal] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalCartValue, setTotalCartValue] = useState(0);

  function openCartModal() {
    setCartModal(true);
  }

  function closeCartModal() {
    setCartModal(false);
  }

  function addToCart(product: iProductsCart) {
    if (
      !cartProducts.some((productInCart) => productInCart.id === product.id)
    ) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity! + 1 };
        } else {
          return item;
        }
      });
      setCartProducts(updatedCart);
    }
    toast.success("Produto adicionado ao carrinho!");
  }

  function addFromCart(product: iProductsCart) {
    const updatedCart = cartProducts.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity! + 1 };
      } else {
        return item;
      }
    });
    toast.info("Item atualizado!");
    setCartProducts(updatedCart);
  }

  function deductFromCart(product: iProductsCart) {
    if (product.quantity === 1) {
      const updatedCart = cartProducts.filter((item) => item.id !== product.id);
      setCartProducts(updatedCart);
      toast.info("Item removido do carrinho!");
    } else {
      const updatedCart = cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity! - 1 };
        } else {
          return item;
        }
      });
      setCartProducts(updatedCart);
      toast.info("Item atualizado!");
    }
  }

  function removeFromCart(product: iProductsCart) {
    const updatedCart = cartProducts.filter((item) => item.id !== product.id);
    setCartProducts(updatedCart);
    toast.info("Item removido do carrinho.");
  }

  function clearCart() {
    setCartProducts([]);
    toast.info("Carrinho desfeito :(");
  }

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("@CURRENT-CART") || "";
    if (cartFromLocalStorage) {
      setCartProducts(JSON.parse(cartFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (cartProducts.length === 0) {
      setTotalCartValue(0);
      setTotalCartItems(0);
      localStorage.removeItem("@CURRENT-CART");
    } else {
      const totalSaleValue = cartProducts.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.quantity!;
        },
        0
      );
      setTotalCartValue(totalSaleValue);
      localStorage.setItem("@CURRENT-CART", JSON.stringify(cartProducts));

      const totalSaleItems = cartProducts.reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.quantity!;
        },
        0
      );
      setTotalCartItems(totalSaleItems);
      localStorage.setItem("@CURRENT-CART", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        cartModal,
        openCartModal,
        closeCartModal,
        totalCartItems,
        totalCartValue,
        addToCart,
        addFromCart,
        deductFromCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
