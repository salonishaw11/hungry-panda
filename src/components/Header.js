import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("login");
  const onlineStatus = useOnline();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
          <img className="w-56" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-4">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-4">
              <Link to={"/grocery"}>Grocery</Link>
            </li>
            <li className="px-4">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="px-4">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to={"/cart"}>Cart- {cartItems.length}</Link>
            </li>
            <li className="px-4">
              <button
                className="login-btn"
                onClick={() =>
                  loginbtn === "login"
                    ? setLoginBtn("logout")
                    : setLoginBtn("login")
                }
              >
                {loginbtn}:{loggedInUser}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
