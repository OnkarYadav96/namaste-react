import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { resObj } from "../Data/RestaurantData";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { Counter } from "./Counter";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilterRest] = useState([]);

  // Higher Order Component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Due to CROS error
    // const data = await  fetch("https://corsproxy.io/?https://fakerestaurantapi.runasp.net/api/Restaurant/items");
    // const json =  await data.json();
    // console.log(json);
    // setListOfRestaurants("Test json responce",json);
    setListOfRestaurants(resObj);
    setFilterRest(resObj);
  };

  function filerOfferFoodRest(restList) {
    setFilterRest(
      restList.filter((item) => {
        return item.itemPrice < 400;
      })
    );
  }

  function filterSearchText(filterSearchText) {
    return setFilterRest(
      listOfRestaurants.filter((restaurant) => {
        return restaurant.restaurantName === filterSearchText;
      })
    );
  }

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Oops..Looks like you are OffLine..!!! Please check your internet
        connection.
      </h1>
    );
  }

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-box"
          onClick={() => {
            filterSearchText(searchText);
          }}
        >
          Search
        </button>
        <div className="filter-btn">
          <button
            onClick={() => {
              filerOfferFoodRest(listOfRestaurants);
            }}
          >
            Offer Button for Food under 400 $ items
          </button>
        </div>
      </div>
      <div>
        <Counter />
      </div>

      <div className="res-container">
        {filteredRest.map((restaurant) => {
          return (
            <Link
              key={restaurant.itemID}
              to={"/restaurants/" + restaurant.restaurantID}
            >
              {restaurant.Promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
