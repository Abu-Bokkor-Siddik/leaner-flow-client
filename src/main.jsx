import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import AuthProvidev from "./auth/AuthProvidev.jsx";
import Dynamic from "./components/Dynamic.jsx";
import Share from "./components/Share.jsx";
import Member from "./share/Member.jsx";
import Privet from "./user/Privet.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import Myprofile from "./user/Myprofile.jsx";
import Add from "./user/Add.jsx";
import Mypost from "./user/Mypost.jsx";
import AdminP from "./admin/AdminP.jsx";
import ManageU from "./admin/ManageU.jsx";
import Reported from "./admin/Reported.jsx";
import MakeAn from "./admin/MakeAn.jsx";
import Payment from "./user/Payment.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/card/:id",
        element: <Dynamic></Dynamic>,
        loader:({params})=> fetch(`http://localhost:3005/card/${params.id}`)
      },
      {
        path: "/share/:id",
        element: <Share></Share>,
      },
      {
        path: "/member",
        element: <Privet><Member></Member></Privet>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"myprofile",
        element:<Myprofile></Myprofile>
      },
      {
        path:"add",
        element:<Add></Add>
      },
      {
        path:"mypost",
        element:<Mypost></Mypost>
      },
      {
        path:"admin",
        element:<AdminP></AdminP>
      },
      {
        path:"manage",
        element:<ManageU></ManageU>
      },
      {
        path:"reported",
        element:<Reported></Reported>
      },
      {
        path:"make",
        element:<MakeAn></MakeAn>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvidev>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </AuthProvidev>
  </React.StrictMode>
);
