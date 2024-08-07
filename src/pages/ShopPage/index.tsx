import { useContext } from "react";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import { CartContext } from "../../providers/CartContext";
import ProductList from "./ProductsList";
import { StyledShopPage } from "./styles";

const ShopPage = () => {
  const { cartModal } = useContext(CartContext);

  return (
    <StyledShopPage>
      <Header />
      <ProductList />
      {cartModal && <CartModal />}
    </StyledShopPage>
  );
};

export default ShopPage;
