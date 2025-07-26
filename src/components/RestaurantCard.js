// import { CDN_URL } from "../utils/logo";
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("resData = ",resData);
  // console.log("Data = ",resData.card?.card?.info)
  const { imageUrl, itemName, restaurantName, itemDescription, itemPrice } =
    resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={imageUrl} />
      <h3>{itemName}</h3>
      <h4>{itemDescription}</h4>
      <h4>Restaurant Name: {restaurantName}</h4>
      <h4>Price: {itemPrice}</h4>
    </div>
  );
};

// HigherOrder component
// input==> RestaurantCard ==> return RestaurantCardPromoted
// Output ==> return RestaurantCardPromoted

 const withPromotedLabel = (RestaurantCard) => {
  return (resData) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...resData}/>
      </div>
    )
  };
};

export {RestaurantCard,withPromotedLabel} ;
