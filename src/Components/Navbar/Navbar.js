import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { TfiReddit } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../allContext/MyContext";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout, user, loggedInUser, setLoggedInUser } =
    useContext(UserContext);

  // getting current user
  useEffect(() => {
    fetch(`https://bookfee-server.vercel.app/currentUser/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data);
      });
  }, [user?.email, setLoggedInUser]);

  // using react query
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://bookfee-server.vercel.app/booksCat").then((res) =>
        res.json()
      ),
  });

  const handleLogout = () => {
    return logout()
      .then()
      .catch((err) => console.log(err));
  };

  const userAuthenticity = user ? (
    <>
      <li>
        <NavLink
          to="/profile"
          aria-label="profile"
          title="Profile"
          className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
        >
          Profile
        </NavLink>
      </li>
      {loggedInUser?.userType === "buyer" ? (
        <li>
          <Link
            to="/dashboard/myOrders"
            aria-label="my orders"
            title="my orders"
            className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
          >
            My Orders
          </Link>
        </li>
      ) : null}
      {loggedInUser?.userType === "seller" ? (
        <li>
          <Link
            to="/dashboard/addProducts"
            aria-label="add products"
            title="add products"
            className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
          >
            Add Products
          </Link>
        </li>
      ) : null}

      <li>
        <NavLink
          to="/dashboard"
          aria-label="Dashboard"
          title="Dashboard"
          className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <button
          onClick={handleLogout}
          aria-label="Sign out"
          title="Sign out"
          className="font-medium tracking-wide text-gray-900  transition-colors duration-200 hover:text-purple-400"
        >
          Sign out
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link
          to="/login"
          aria-label="Sign in"
          title="Sign in"
          className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
        >
          Sign in
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-200 hover:text-gray-900 transition duration-200 rounded shadow-md bg-slate-700 hover:bg-slate-400 focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
          title="Sign up"
        >
          Sign up
        </Link>
      </li>
    </>
  );

  return (
    <div
      data-theme="pastel"
      className="px-4 py-5 mx-auto  md:max-w-full md:px-24 lg:px-8 "
    >
      <div className="relative flex grid items-center grid-cols-3 lg:grid-cols-3">
        {/*  */}

        {/* navbar menu for large screen and hidden in small screen */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
            >
              Home
            </Link>
          </li>
          <li>
            <div
              to="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-purple-400"
            >
              <Menu menuButton={<MenuButton>Categories</MenuButton>} transition>
                {categories &&
                  categories?.map((cat) => (
                    <MenuItem key={cat.cat_id}>
                      <Link to={`/category/${cat.cat_id}`}>{cat.title}</Link>
                    </MenuItem>
                  ))}
              </Menu>
            </div>
          </li>

          <li>
            <Link
              to="/blog"
              aria-label="blog"
              title="blog"
              className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* open menu for slidebar */}
        <div className="flex lg:hidden">
          <label
            htmlFor="dashboard-drawer"
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50"
          >
            <svg className="w-5 text-gray-700 " viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </label>
        </div>

        {/* Main title  */}
        <div>
          <Link
            to="/"
            aria-label="Bookfee"
            title="Bookfee"
            className="inline-flex items-center lg:mx-auto"
          >
            <TfiReddit className="text-3xl" />
            <span className="ml-2 text-2xl font-bold tracking-wide text-gray-900  uppercase">
              Bookfee
            </span>
          </Link>
        </div>

        {/* here the deciding content for logged in user. also hide in small screen  */}
        <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
          {userAuthenticity}
        </ul>

        <div className="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-700 " viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white opacity-90 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Bookfee"
                      title="Bookfee"
                      className="inline-flex items-center"
                    >
                      <TfiReddit className="text-2xl" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-700  uppercase">
                        Bookfee
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:  focus:  focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-700 " viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <div
                        to="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
                      >
                        <Menu
                          menuButton={<MenuButton>Categories</MenuButton>}
                          transition
                        >
                          {categories?.map((cat) => (
                            <MenuItem>
                              {/* const id= cat?.cat-id; */}
                              <Link to={`/category/${cat.cat_id}`}>
                                {cat.title}
                              </Link>
                            </MenuItem>
                          ))}
                        </Menu>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="blog"
                        title="blog"
                        className="font-medium tracking-wide text-gray-700  transition-colors duration-200 hover:text-purple-400"
                      >
                        Blog
                      </Link>
                    </li>
                    {userAuthenticity}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
