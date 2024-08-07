import { useContext } from "react";
import { useOutClickDiv } from "../../hooks";
import { CartContext } from "../../providers/CartContext";
import { EmptyCart } from "./EmptyCart";
import FilledCart from "./FilledCart";
import { ModalBox, StyledModal } from "./styles";

const CartModal = () => {
  const { closeCartModal, cartProducts } = useContext(CartContext);
  const modalRef = useOutClickDiv(closeCartModal);

  return (
    <StyledModal>
      <ModalBox ref={modalRef}>
        <header>
          <h3>Carrinho de compras</h3>
          <button onClick={closeCartModal}></button>
        </header>
        {cartProducts?.length ? <FilledCart /> : <EmptyCart />}
      </ModalBox>
    </StyledModal>
  );
};

export default CartModal;
