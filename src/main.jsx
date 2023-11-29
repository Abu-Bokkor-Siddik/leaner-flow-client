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
import Comment from "./user/Comment.jsx";
import AdminPrivet from "./auth/AdminPrivet.jsx";
import Errore from "./pages/Errore.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errore></Errore>,
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
        element: <Privet><Dynamic></Dynamic></Privet>,
        loader:({params})=> fetch(`https://learn-server-six.vercel.app/card/${params.id}`)
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
        path:"comment/:id",
        element:<Comment></Comment>,
        loader:({params})=>fetch(`https://learn-server-six.vercel.app/mypost/${params.id}`)
      },
      // admin route here ... 
      {
        path:"admin",
        element:<AdminPrivet><AdminP></AdminP></AdminPrivet>
      },
      {
        path:"manage",
        element:<AdminPrivet><ManageU></ManageU></AdminPrivet>
      },
      {
        path:"reported",
        element:<AdminPrivet><Reported></Reported></AdminPrivet>
      },
      {
        path:"make",
        element:<AdminPrivet><MakeAn></MakeAn></AdminPrivet>
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
