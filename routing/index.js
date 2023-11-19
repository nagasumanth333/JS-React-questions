import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import App from "./App";
// import About from "./components/About";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ]
  }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
