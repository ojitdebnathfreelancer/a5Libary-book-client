import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/features/user/userSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="bg-white shadow-md sticky w-full top-0 left-0 z-[9999999]">
      <div className="container">
        <div className="relative flex items-center justify-between py-3">
          <Link to={"/"}>
            <h3 className=" text-xl md:text-3xl font-bold text-black">
              <span className="text-lime-700">Library</span> Book
            </h3>
          </Link>
          <ul className="md:flex items-center hidden space-x-8 text-lg">
            <li>
              <Link
                to="/"
                className="font-semibold hover:text-slate-900 text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-books"
                className="font-semibold hover:text-slate-900 text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Books
              </Link>
            </li>

            {user?.email ? (
              <>
                <li onClick={handleLogOut}>
                  <button className="text-black font-medium rounded-md bg-orange-300 px-4 py-2 hover:bg-orange-500 duration-300">
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="text-black font-medium rounded-md bg-orange-300 px-4 py-2 hover:bg-orange-500 duration-300"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resister"
                    className="text-black font-medium rounded-md bg-orange-300 px-4 py-2 hover:bg-orange-500 duration-300"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
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
                <div className="p-5 bg-gray-900 ">
                  <div className="flex items-center justify-between mb-4">
                    <Link to={"/"}>
                      <h3 className="text-3xl font-serif text-gray-200">
                        <span className="text-rose-600">E-</span>Book
                      </h3>
                    </Link>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded-full text-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="flex justify-center items-center text-center">
                    <ul className="space-y-4 ">
                      <li>
                        <Link
                          to={"/"}
                          className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/all-books"}
                          className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          All Books
                        </Link>
                      </li>

                      {user?.email ? (
                        <>
                          <li onClick={handleLogOut}>
                            <Link
                              to={"/login"}
                              className="text-gray-900 rounded px-3 mt-2 py-1 bg-gray-200 w-full"
                            >
                              LogOut
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to={"/login"}
                              className="text-gray-900 rounded px-3 mt-2 py-1 bg-gray-200 w-full"
                            >
                              Sign In
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/resister"}
                              className="text-gray-900 rounded px-3 mt-2 py-1 bg-gray-200 w-full"
                            >
                              Sign Up
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
