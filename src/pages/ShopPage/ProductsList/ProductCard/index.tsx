import { StyledProduct } from "./styles";
import { StyledButton } from "../../../../styles/Buttons";
import { iProductProps } from "../@types";
import { useContext, useState } from "react";
import { CartContext } from "../../../../providers/CartContext";

const Product = ({ product }: iProductProps) => {
  const [cardHover, setCardHover] = useState(false);
  const { addToCart } = useContext(CartContext);

  return (
    <StyledProduct
      onMouseOver={() => setCardHover(true)}
      onMouseOut={() => setCardHover(false)}
    >
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <span>{product.category}</span>
      <p>
        {product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <StyledButton
        onClick={() => addToCart(product)}
        buttonSize="medium"
        buttonStyle={cardHover ? "solidGreen" : "greyDefault"}
      >
        Adicionar
      </StyledButton>
    </StyledProduct>
  );
};

export default Product;
