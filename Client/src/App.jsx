import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider, useAuth } from "./context/auth";
import { Protected } from "./components/Routes/Protected";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Outlet />
      </Layout>
    </AuthProvider>
  );
};
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));
const Category = lazy(() => import("./components/Category"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));
const Logout = lazy(() => import("./components/Logout"));
const UserDashboard = lazy(() =>
  import("./components/Dashboard/UserDashboard")
);
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
const AdminDashboard = lazy(() =>
  import("./components/Dashboard/AdminDashboard")
);
const Protected = lazy(() => import("./components/Routes/Protected"));
const CreateCategory = lazy(() => import("./components/Admin/createCategory"));
const CreateProduct = lazy(() => import("./components/Admin/createProduct"));
const Users = lazy(() => import("./components/Admin/Users"));

const Profile = lazy(() => import("./components/User/Profile"));
const Orders = lazy(() => import("./components/User/Orders"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/category",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/logout",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Logout />
          </Suspense>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "/userDashboard",
        element: <Protected checkFor={"user"} />,
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <UserDashboard />
              </Suspense>
            ),
          },

          {
            path: "/userDashboard/profile",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <UserDashboard>
                  <Profile />
                </UserDashboard>
              </Suspense>
            ),
          },
          {
            path: "/userDashboard/orders",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <UserDashboard>
                  <Orders />
                </UserDashboard>
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/adminDashboard",
        element: <Protected checkFor={"admin"} />,
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard />
              </Suspense>
            ),
          },
          {
            path: "/adminDashboard/createCategory",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <CreateCategory />
                </AdminDashboard>
              </Suspense>
            ),
          },
          {
            path: "/adminDashboard/createProduct",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <CreateProduct />
                </AdminDashboard>
              </Suspense>
            ),
          },
          {
            path: "/adminDashboard/users",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <Users />
                </AdminDashboard>
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
export default App;
