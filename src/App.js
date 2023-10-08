import Home from "Pages/Home/Home";
import Signin from "Pages/SignInAndUp/Sign-in";
import Signup from "Pages/SignInAndUp/Sign-up";
import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Sign-up",
    element: <Signup />,
  },
  {
    path: "/Sign-in",
    element: <Signin />,
  },
]);

function App() {
  const { MyTheme } = useContext(ThemeContext);

  return (
    <div className={`${MyTheme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
