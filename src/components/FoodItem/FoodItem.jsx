import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FoodItem = ({ image, name, price, desc, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url, currency } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <FaMinusCircle
              size={20}
              color="#f44336"
              style={{ cursor: "pointer" }}
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <FaPlusCircle
              size={20}
              color="#8bc34a"
              style={{ cursor: "pointer" }}
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p> <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
