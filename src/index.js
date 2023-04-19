import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import HomeScreen from "./Screens/HomeScreen/Homescreen.js";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.js";
import Error from "./ErrorPage.js";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "Home", element: <HomeScreen /> },
      { path: "LoginPage", element: <LoginScreen /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <RouterProvider router={router} />
      </>
    </Provider>
  </React.StrictMode>
);
