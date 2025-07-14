import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


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


﻿






const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
