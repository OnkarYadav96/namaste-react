
import { CDN_URL } from "../utils/logo";
const RestaurantCard = (props) => {
    const{resData}=props;
    // console.log("resData = ",resData);
    // console.log("Data = ",resData.card?.card?.info)
    const {cloudinaryImageId,name,areaName,cuisines,avgRating,costForTwo}=resData?.card?.card?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;