import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[0]?.card?.card?.info?.name}
      </h1>
      <p
        className="font-bold text-lg
      "
      >
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      {categories?.map((c) => (
        <RestaurantCategory data={c.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
