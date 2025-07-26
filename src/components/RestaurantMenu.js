import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import {RestaurantCard} from "./RestaurantCard";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

export const RestaurantMenu = () => {
  // const [restInfo, setRestInfo] = useState(null);

//   This resId get from what we pass at URL
  const {resId}=useParams();


  const [RestaurantData] =useRestaurantMenu(resId);  
  console.log("Check Custum data : ",RestaurantData)



  return RestaurantData === null ? (
    <Shimmer />
  ) : (
    <div>
      Restaurant Menu
      <div className="res-container">
        {RestaurantData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.itemID} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
