import { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./src/components/About";
import Contact from "./src/components/Contact";
import { Error } from "./src/components/Error";
import { RestaurantMenu } from "./src/components/RestaurantMenu";
import { Shimmer } from "./src/components/Shimmer";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
// import { Grocery } from "./src/components/Grocery";

/***
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -search
 *  -RestaurantContainer
 *    -Restaurant card
 *     -Img
 *     -Name,causin,Star rating
 * Footer
 *  -copyrights
 *  -Links
 *  -Address
 *  -Contacts
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const GroceryModule = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><GroceryModule /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={appStore}><RouterProvider router={appRouter} /></Provider>);
