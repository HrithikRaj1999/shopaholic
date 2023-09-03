import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserMenu = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="m-3 p-2">
      <table className="shadow-lg bg-white border-separate">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-3xl text-centre px-8 py-4">
              User's Panel
            </th>
          </tr>
        </thead>
        <tbody className="text-black text-center ">
          <tr
            className={
              pathname === "/userDashboard/profile"
                ? "bg-blue-300 font-arial text-xl "
                : "bg-white hover:bg-gray-200 "
            }
          >
            <td className="border  px-8 py-4 ">
              <Link to="/userDashboard/profile">Profile</Link>
            </td>
          </tr>
          <tr
            className={
              pathname === "/userDashboard/orders"
                ? "bg-blue-300 font-arial text-xl"
                : "bg-white hover:bg-gray-200"
            }
          >
            <td className="border px-8 py-4 ">
              <Link to="/userDashboard/orders">Orders</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserMenu;
