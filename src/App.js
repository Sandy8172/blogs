import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import Navbar from "./widgets/layout/Navbar";
import Description from "./features/description/components/Description";
import Summary from "./features/description/components/Summary";
import AdminForm from "./features/admin/components/AdminForm";
import BlogList from "./features/admin/components/BlogList";
import DialogEdit from "./features/admin/components/DialogEdit";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/> <Homepage /> </> ,
  },
  {
    path: "/profile",
    element: <><Navbar/><Profilepage/></>,
  },
  {
    path: "/description-page/:title",
    element: <Description/>,
  },
  {
    path: `/summary/:postID`,
    element: <Summary/>,
  },
  {
    path: `/admin-panel`,
    element: <><Navbar/><AdminPage/></>,
  },
  {
    path: `/admin-form`,
    element: <AdminForm/>,
  },
  {
    path: `/admin-list`,
    element: <BlogList/>,
  },
  {
    path: `/admin-blog/:blogDetails`,
    element: <DialogEdit/>,
  },

]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
