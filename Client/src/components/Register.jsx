import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "Hrithik Raj",
  email: "write2hrithik@gmail.com",
  phone: "917903305088",
  address: "Pashan",
  password: "12345",
  country: "India",
  state: "Maharashtra",
  zip: "411021",
  billingSame: false,
};

const Register = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API}/api/v1/auth/register`,
            values
          );
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          {
            <div className="min-h-screen p-6 flex items-center bg-gray-50 dark:bg-gray-900 justify-center">
              <div className="container max-w-screen-lg mx-auto  rounded-2xl dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <div className=" text-gray-900 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className=" text-gray-900 md:text-2xl dark:text-white">
                        <p className="font-medium text-lg">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                      </div>

                      <div className="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <label
                              htmlFor="name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Full Name
                            </label>
                            <Field
                              type="text"
                              name="name"
                              id="name"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            />
                          </div>
                          <div className="md:col-span-5 ">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Email Address
                            </label>

                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder="email@domain.com"
                            />
                          </div>
                          <div className="md:col-span-3">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              htmlFor="Phone Number"
                            >
                              Phone Number
                            </label>
                            <Field
                              type="text"
                              name="phone"
                              id="phone"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder="+912xxxxxx"
                            />
                          </div>
                          <div className="md:col-span-3">
                            <label
                              htmlFor="address"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Address / Street
                            </label>
                            <Field
                              type="text"
                              name="address"
                              id="address"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder="kurji, more"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              htmlFor="Password"
                            >
                              Password
                            </label>
                            <Field
                              type="text"
                              name="password"
                              id="password"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder="123****"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              htmlFor="country"
                            >
                              Country / region
                            </label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <Field
                                name="country"
                                id="country"
                                placeholder="Country"
                                className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              />
                              <button
                                tabIndex={-1}
                                className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1={18} y1={6} x2={6} y2={18} />
                                  <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                              </button>
                              <button
                                tabIndex={-1}
                                htmlFor="show_more"
                                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="18 15 12 9 6 15" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <label
                              htmlFor="state"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              State / province
                            </label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <Field
                                name="state"
                                id="state"
                                placeholder="State"
                                className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              />
                              <button
                                tabIndex={-1}
                                className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1={18} y1={6} x2={6} y2={18} />
                                  <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                              </button>
                              <button
                                tabIndex={-1}
                                htmlFor="show_more"
                                className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                              >
                                <svg
                                  className="w-4 h-4 mx-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="18 15 12 9 6 15" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="md:col-span-1">
                            <label
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              htmlFor="zipcode"
                            >
                              Zipcode
                            </label>
                            <Field
                              type="text"
                              name="zip"
                              id="zip"
                              className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder="800010"
                            />
                          </div>
                          <div className="md:col-span-5">
                            <div className="inline-flex items-center">
                              <Field
                                type="checkbox"
                                name="billingSame"
                                id="billingSame"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="billingSame"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                My billing address is different than above.
                              </label>
                            </div>
                          </div>
                          <div className="md:col-span-5 text-right">
                            <div className="inline-flex items-end">
                              <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              >
                                Register
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </Form>
      )}
    </Formik>
  );
};

export default Register;
