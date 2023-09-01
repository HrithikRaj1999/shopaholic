import React from "react";
import { useAuth } from "../context/auth";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>Home</div>
      <div>{JSON.stringify(auth, null, 2)}</div>
    </div>
  );
};

export default Home;
