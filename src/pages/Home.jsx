import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Go To <Link to={'product'}> Product </Link>
      </p>
    </div>
  );
};

export default Home;
