import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const SearchImput = () => {
  const { handleSearch } = useContext(CartContext);

  return (
    <div>
      <input type="text" placeholder="buscar" onChange={handleSearch} />
    </div>
  );
};

export default SearchImput;
