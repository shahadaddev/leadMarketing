import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/HomeComponents/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import About from "../Components/AboutComponents/AboutPage/About";
import ContactPage from "../Components/ContactComponents/ContactPage";
import LetsTalk from "../Components/ContactComponents/LetsTalk";

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
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/contactForm",
        element: <LetsTalk></LetsTalk>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
