import RestaurantCard from "./RestaurantCars";
import { resObj } from "../Data/RestaurantData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState(resObj);
  // let listOfRestaurants = resObj;

  function filerTopRatedRest(restList) {
   setListOfRestaurants( restList.filter((item) => {
      return item.card.card.info.avgRating > 4;
    }));
  }
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter-btn">
        <button
          onClick={() => {
            filerTopRatedRest(listOfRestaurants);
          }}
        >
          Filter Button
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
