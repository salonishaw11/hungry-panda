import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import { RES_LIST_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [searchtext, setSearchtext] = useState("");
  const [searchfilteredList, setSearchFilterList] = useState([]);
  const [listOfRestaurant, setListOfRestraunt] = useState([]);

  const RestaurantCardVegLabel = withVegLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnline();
  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    console.log(json);
    //setListOfRestraunt(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.info)
    setListOfRestraunt(
      json.data.cards[2].card.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchFilterList(
      json.data.cards[2].card.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus == false) {
    return (
      <h1>It seems you are offline, please check your internet connection.</h1>
    );
  }

  return searchfilteredList.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className="px-4 py-1 rounded-lg m-4 bg-green-100"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setSearchFilterList(filteredList);
              console.log(filteredList);
              console.log(searchfilteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="bg-gray-100 m-4 px-4 py-1 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setSearchFilterList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {searchfilteredList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardVegLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
