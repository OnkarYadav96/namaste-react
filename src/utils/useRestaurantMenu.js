import { useState, useEffect } from "react";

import { resObj } from "../Data/RestaurantData";
export const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    setRestInfo(
      resObj.filter((res) => {
        return res.restaurantID == resId;
      })
    );
    console.log(restInfo);
  };

  console.log("Check data:",restInfo)
  return [restInfo];
};
