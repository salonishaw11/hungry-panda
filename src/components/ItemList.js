import { CDN_URL } from "../utils/constants";

const ItemList = ({ item }) => {
  return (
    <div>
      <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
        <div className="w-9/12">
          <div className="py-2">
            <span>{item.name}</span>
            <span>
              - ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item.description}</p>
        </div>
        <div className="w-3/12 p-4">
          <div className="absolute">
            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
              Add +
            </button>
          </div>
          <img src={CDN_URL + item.imageId} className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default ItemList;
