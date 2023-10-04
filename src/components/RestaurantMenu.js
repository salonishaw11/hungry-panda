import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(json);
  };
  return (
    <div>
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.cards[0]?.card?.card?.info?.cuisines?.join(",")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (item) => {
            return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>;
          }
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
