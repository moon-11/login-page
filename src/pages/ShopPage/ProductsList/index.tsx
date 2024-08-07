import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";
import Product from "./ProductCard";
import { StyledProductsList } from "./styles";

const ProductList = () => {
  const { filteredProducts } = useContext(UserContext);

  return (
    <main>
      <StyledProductsList>
        {filteredProducts?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </StyledProductsList>
    </main>
  );
};

export default ProductList;
