import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const goToOne = () => {
    navigate("1");
  };
  return (
    <div>
      <h1>Product</h1>

      <p onClick={goToOne}>Asus</p>
      <p>
        <Link to={"2"}>MSI</Link>
      </p>
      <p>
        <Link to={"3"}>enovo</Link>
      </p>
    </div>
  );
};

export default Product;
