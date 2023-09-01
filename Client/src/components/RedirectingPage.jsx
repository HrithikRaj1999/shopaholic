import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "./Spinner";

const RedirectingPage = () => {
  const [count, setCount] = useState(10);

  const location = useLocation();
  const navigate = useNavigate();
  useMemo(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    count === 0 ? navigate("/login", { state: location.pathname }) : null;
  }, [count]);
  return (
    <div className=" bg-slate-200 flex h-screen justify-center items-center">
      <p className="text-center text-3xl font-medium p-2">
        You must log in to Access this page. Redirecting to Login page in{" "}
        {count} seconds.
      </p>
      <Spinner />
    </div>
  );
};

export default RedirectingPage;
