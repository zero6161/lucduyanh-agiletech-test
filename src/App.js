import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import LoginPage from "./Pages/LoginPage";
import Profile from "./Pages/Profile";
import Addnew from "./Components/Profile/Addnew";
import Private from "./Components/Private/Private";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/profile",
      element: (
        <Private>
          <Profile />
        </Private>
      ),
      children: [
        {
          path: "addnew",
          element: <Addnew />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
