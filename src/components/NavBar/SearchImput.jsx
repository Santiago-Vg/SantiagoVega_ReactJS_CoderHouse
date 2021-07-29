// REACT
import React, { useContext } from "react";
// CONTEXT
import { SiteContext } from "../../context/SiteContext";

const SearchImput = () => {
  const { handleSearch } = useContext(SiteContext);

  return (
    <div>
      <input type="text" placeholder="buscar" onChange={handleSearch} />
    </div>
  );
};

export default SearchImput;
