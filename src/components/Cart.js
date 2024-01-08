import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());
  console.log(cartItems);
  return (
    <div>
      <button onClick={() => handleClearCart()}> Clear Cart</button>
      <ItemList items={cartItems} />
    </div>
  );
};
export default Cart;
