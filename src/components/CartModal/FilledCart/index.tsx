import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";
import { StyledButton } from "../../../styles/Buttons";
import { CartCard } from "../CartCard";
import { StyledFilledCart } from "./styles";

const FilledCart = () => {
  const { cartProducts, totalCartValue, clearCart } = useContext(CartContext);

  return (
    <StyledFilledCart>
      <ul>
        {cartProducts?.map((productInCart) => (
          <CartCard productInCart={productInCart} key={productInCart.id} />
        ))}
      </ul>
      <footer>
        <div>
          <p>Total</p>
          <p>
            {totalCartValue.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <StyledButton
          onClick={clearCart}
          buttonSize="default"
          buttonStyle="solidLightGrey-100"
        >
          Remover todos
        </StyledButton>
      </footer>
    </StyledFilledCart>
  );
};

export default FilledCart;
