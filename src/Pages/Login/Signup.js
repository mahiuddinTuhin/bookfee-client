import React, { useContext, useState } from "react";
// react icon
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../allContext/MyContext";

import img from "./../../docs/Lo-fi concept-bro.png";

export const Signup = () => {
  const [userType, setUserType] = useState("");

  const { createUser, googleSignIn, facebookSignIn, updateUser, getUserToken } =
    useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const addUserToDB = (email, userType, name) => {
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ email, userType, name }),
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => {
        console.log(data);
        getUserToken(email);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  // Sign up with email and password handle
  const handlesignupSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;

    // signup with email and password with firebase Authentication system
    createUser(email, password)
      .then((result) => {
        // const user = result.user;
        toast("User Created Successfully");

        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            console.log("update user successfully");
            addUserToDB(email, userType, name);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    // navigate("/");
  };

  // Sign up with google pop up
  const handleGooglesignup = () => {
    return googleSignIn()
      .then((result) => {
        // post user detail in database
        const email = result.user.email;
        const type = "buyer";
        addUserToDB(email, type);
      })
      .catch((err) => console.log(err));
  };

  // Sign up with facebook pop up
  const handleFacebooksignup = () => {
    return facebookSignIn()
      .then((result) => {
        // post user detail in database
        const email = result.user.email;
        const type = "buyer";
        addUserToDB(email, type);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative">
      <img
        src={img}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row-reverse">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Be Bookfee <br className="hidden md:block" />
                to pursue your knowledge
              </h2>
              <p className="max-w-xl mb-4 text-base text-white  md:text-lg">
                Time to uprise the level of your knowledge with the stream of
                changing world. Only knowledge can uprise you to the highest
                position.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="text-slate-900 mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up
                </h3>
                <h3
                  className="flex items-center justify-center 
                text-gray-800 mb-4"
                >
                  Sign up with{" "}
                  <span onClick={handleGooglesignup} className="ml-3 text-3xl">
                    <FcGoogle />
                  </span>
                  <span
                    onClick={handleFacebooksignup}
                    className="ml-3 text-4xl text-blue-700"
                  >
                    <MdOutlineFacebook />
                  </span>
                </h3>
                <form onSubmit={(event) => handlesignupSubmit(event)}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="text-slate-800 lg:text-xl inline-block mb-1 font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      placeholder="Raymond Johnson"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-gray-800"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="text-slate-800 lg:text-xl inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
                      placeholder="john.raymon@outlook.com"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-gray-800"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div
                    className="mb-1 sm:mb-2"
                    onChange={(event) => setUserType(event.target.value)}
                  >
                    <div className="max-w-lg mx-auto ">
                      <h2 className="text-slate-800 lg:text-xl inline-block mb-1 font-medium mt-4">
                        Select Account type:{" "}
                      </h2>
                      <fieldset className="mb-5">
                        <legend className="sr-only">userType</legend>

                        <div className="flex items-center mb-4">
                          <input
                            required
                            id="user-option-2"
                            type="radio"
                            name="userType"
                            value="buyer"
                            className="radio border-black checked:bg-gray-900"
                            aria-labelledby="user-option-2"
                            aria-describedby="user-option-2"
                          />
                          <label
                            htmlFor="user-option-2"
                            className="text-sm font-medium text-green-900  ml-2 block"
                          >
                            Buyer
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            id="user-option-3"
                            type="radio"
                            name="userType"
                            value="seller"
                            className="radio border-black checked:bg-gray-900"
                            aria-labelledby="user-option-3"
                            aria-describedby="user-option-3"
                          />
                          <label
                            htmlFor="user-option-3"
                            className="text-sm font-medium   ml-2 block  text-gray-800"
                          >
                            Seller
                          </label>
                        </div>
                      </fieldset>
                    </div>

                    <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="text-slate-800 lg:text-xl inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="********"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-gray-800"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      signup
                    </button>
                  </div>
                  <p className="text-xs text-fuchsia-800 sm:text-sm mb-2">
                    Create new account ?{" "}
                    <Link className="hover:text-green-600" to="/signup">
                      Signup
                    </Link>
                  </p>
                  <p className="text-xs text-white  sm:text-sm">
                    We respect your privacy. We never share your private
                    information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
