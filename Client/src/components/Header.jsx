import { Link, useLocation } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useAuth } from "../context/auth";
const Header = () => {
  const [auth, setAuth] = useAuth();
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const loc = splitLocation[1];

  return (
    <div className="flex justify-between shadow-2xl bg-black w-full p-1 ">
      <div className="flex flex-wrap mx-2 ">
        <a href="/">
          <GiShoppingBag color="white" size={"50px"} />
        </a>
        <h1 className="font-bold font-serif p-4 mx-4 text-white text-2xl hover: hover:text-3xl">
          ShopAholic
        </h1>
      </div>
      <div className="flex items-center text-white ">
        <ul className="flex p-4 mx-4 text-lg ">
          <li
            className={
              loc === ""
                ? "active px-3 underline hover:text-blue-300 "
                : "px-3 hover:text-blue-300  "
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              loc === "category"
                ? "active px-3 underline hover:text-blue-300 "
                : "px-3 hover:text-blue-300  "
            }
          >
            <Link to="category">Category</Link>
          </li>
          <li
            className={
              loc === "cart"
                ? "active px-3 underline hover:text-blue-300 "
                : "px-3 hover:text-blue-300  "
            }
          >
            <Link to="/cart">🛒 Cart (0)</Link>
          </li>
          {auth.user === null ? (
            <li
              className={
                loc === "register"
                  ? "active px-3 underline hover:text-blue-300 "
                  : "px-3 hover:text-blue-300  "
              }
            >
              <Link to="/register">Register</Link>
            </li>
          ) : null}
          <li
            className={
              loc === "login"
                ? "active px-3 underline hover:text-blue-300 "
                : "px-3 hover:text-blue-300  "
            }
          >
            {auth.user === null ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/logout">Log Out({auth.user.name})</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
