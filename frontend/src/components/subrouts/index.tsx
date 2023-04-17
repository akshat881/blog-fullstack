import {  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes, } from "react-router-dom";
import Sidnav from '../sidenavbar'
import Blogs from "components/post";
import Dash from "components/dashboard";
import { News } from "styled/sidenavbar";

  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Routes>
                <Route path="blo/:id" element={<Blogs />} />
                <Route path="/home" element={<Dash />} />
              </Routes>
    )
  );
 



     


