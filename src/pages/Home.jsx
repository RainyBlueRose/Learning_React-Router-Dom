import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate('product');
  };

  return (
    <div>
      <h1>Home</h1>
      <p>
        <button onClick={goToProduct}>Product</button>
      </p>
    </div>
  );
};

export default Home;
