import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/HomeComponents/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import About from "../Components/AboutComponents/AboutPage/About";
import ContactPage from "../Components/ContactComponents/ContactPage";
import WorkPage from "../Components/OurWorkComponents/WorksPage/WorkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <About></About>,
      },
      {
        path: "/works",
        element: <WorkPage></WorkPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
