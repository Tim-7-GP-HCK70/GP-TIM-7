import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import GamePage from "./pages/gamepage";
import Login from "./pages/loginpage";
import Register from "./pages/registerpage";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("token")) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <GamePage />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/login");
      }
      return null;
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
