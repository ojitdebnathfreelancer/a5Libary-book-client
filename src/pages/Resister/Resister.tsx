/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser } from "../../redux/features/user/userSlice";
import { useEffect } from "react";
import SmallLoader from "../../utils/SmallLoader";
import { toast } from "react-hot-toast";
import { useSaveUserMutation } from "../../redux/api/userApiSlice";

const Resister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, isLoading, error } = useAppSelector((state) => state.user);
  const [saveUser, {}] = useSaveUserMutation();

  useEffect(() => {
    if (user.email) {
      navigate("/");
    }
  }, [user?.email!]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleResister = (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(createUser({ email, password }));
    const user = {
      name,
      email,
    };
    saveUser(user);
  };

  return (
    <div className="container  flex flex-col justify-center py-14">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-7 bg-white shadow-lg sm:rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">Register</h1>
            </div>
            <form
              onSubmit={handleResister}
              className="divide-y divide-gray-200"
            >
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Full name"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="text-black font-medium rounded-md bg-orange-300 px-4 py-2 hover:bg-orange-500 duration-300 w-full"
                  >
                    {isLoading ? <SmallLoader /> : "Resister"}
                  </button>
                </div>
                <p className="max-w-xs text-base">
                  Already have account!! Please
                  <Link to={"/login"} className="text-rose-600 underline">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
