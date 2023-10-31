import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(true);
  };

  return (
    <div>
      <div className="w-6/12 my-4 mx-auto p-4 bg-gray-50 shadow-lg">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && (
          <div>
            {data.itemCards.map((c) => (
              <ItemList item={c.card.info} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
