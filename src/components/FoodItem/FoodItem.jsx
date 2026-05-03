import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart, url, currency } =
    useContext(StoreContext);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 border border-zinc-100">
      {/* Imagen — sin ningún botón ni contador */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={url + "/images/" + image}
          alt={name}
        />
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-bold text-zinc-800 leading-snug">
            {name}
          </h3>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <img src={assets.rating_starts} alt="rating" className="w-14" />
          </div>
        </div>

        <p className="text-xs text-zinc-500 mb-4 line-clamp-2 leading-relaxed">
          {desc}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-zinc-800">
            {currency}
            {price}
          </span>
          {!cartItems[id] ? (
            <button
              onClick={() => addToCart(id)}
              className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center bg-zinc-100 rounded-full px-2 py-1">
              <button
                onClick={() => removeFromCart(id)}
                className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-full transition-colors cursor-pointer"
              >
                <FaMinusCircle size={14} color="#f44336" />
              </button>
              <span className="px-2 text-xs font-bold text-zinc-800">
                {cartItems[id]}
              </span>
              <button
                onClick={() => addToCart(id)}
                className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-full transition-colors cursor-pointer"
              >
                <FaPlusCircle size={14} color="#8bc34a" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
