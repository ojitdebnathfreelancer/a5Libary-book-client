import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.init";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));

        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div className="font-serif">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
