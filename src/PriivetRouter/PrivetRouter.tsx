import { Navigate, useLocation } from "react-router-dom";
import Loader from "../utils/Loader";
import { useAppSelector } from "../redux/hooks";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const PrivetRouter = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const location = useLocation();
  console.log(user);
  if (isLoading) {
    return <Loader />;
  }
  if (!user.email) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default PrivetRouter;
