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

]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
