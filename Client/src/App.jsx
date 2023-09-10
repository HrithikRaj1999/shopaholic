import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider, useAuth } from "./context/auth";
import { Protected } from "./components/Routes/Protected";
import { CategoriesProvider } from "./context/categoriesContext";
import { ProductProvider } from "./context/ProductContext";
const App = () => {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <ProductProvider>
          <Layout>
            <Outlet />
          </Layout>
        </ProductProvider>
      </CategoriesProvider>
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
const DeleteProduct = lazy(() => import("./components/Admin/DeleteProduct"));
const UpdateProduct = lazy(() => import("./components/Admin/UpdateProduct"));
const Protected = lazy(() => import("./components/Routes/Protected"));
const CreateCategory = lazy(() => import("./components/Admin/CreateCategory"));
const CreateProduct = lazy(() => import("./components/Admin/CreateProduct"));
const Users = lazy(() => import("./components/Admin/Users"));

const Products = lazy(() => import("./components/Admin/Products"));
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
        path: "/user-dashboard",
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
            path: "/user-dashboard/profile",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <UserDashboard>
                  <Profile />
                </UserDashboard>
              </Suspense>
            ),
          },
          {
            path: "/user-dashboard/orders",
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
        path: "/admin-dashboard",
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
            path: "/admin-dashboard/createCategory",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <CreateCategory />
                </AdminDashboard>
              </Suspense>
            ),
          },
          {
            path: "/admin-dashboard/createProduct",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <CreateProduct />
                </AdminDashboard>
              </Suspense>
            ),
          },
          {
            path: "/admin-dashboard/users",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <Users />
                </AdminDashboard>
              </Suspense>
            ),
          },
          {
            path: "/admin-dashboard/products",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <Products />
                </AdminDashboard>
              </Suspense>
            ),
          },
          {
            path: "/admin-dashboard/update-product/:slug",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <UpdateProduct />
                </AdminDashboard>
              </Suspense>
            ),
          },
          {
            path: "/admin-dashboard/delete-product",
            element: (
              <Suspense fallback={<h1>Loading......</h1>}>
                <AdminDashboard>
                  <DeleteProduct />
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
