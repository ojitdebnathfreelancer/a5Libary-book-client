import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import BookDetails from "../components/BookDetails";
import AddBook from "../components/AddBook";
import UpdateBook from "../components/UpdateBook";
import Resister from "../pages/Resister/Resister";
import Login from "../pages/Login/Login";
import PrivetRouter from "../PriivetRouter/PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/details/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: (
          <PrivetRouter>
            <AddBook />
          </PrivetRouter>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivetRouter>
            <UpdateBook />
          </PrivetRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/resister",
        element: <Resister />,
      },
    ],
  },

  {
    path: "*",
    element: <p>Not found.....................</p>,
  },
]);

export default router;
