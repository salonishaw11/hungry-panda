import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [searchtext, setSearchtext] = useState("");
  const [searchfilteredList, setSearchFilterList] = useState([]);
  const [listOfRestaurant, setListOfRestraunt] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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

  return searchfilteredList.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-btn">
          <input
            type="text"
            value={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {searchfilteredList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
