import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart, url, currency } =
    useContext(StoreContext);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 border border-zinc-100">
      {/* Imagen */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={url + "/images/" + image}
          alt={name}
        />

        {/* Botón agregar / contador sobre la imagen */}
        {!cartItems[id] ? (
          <button
            onClick={() => addToCart(id)}
            className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          >
            <img src={assets.add_icon_white} alt="add" className="w-5 h-5" />
          </button>
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-md">
            <FaMinusCircle
              size={20}
              color="#f44336"
              className="cursor-pointer"
              onClick={() => removeFromCart(id)}
            />
            <p className="text-sm font-bold text-zinc-800 min-w-[16px] text-center">
              {cartItems[id]}
            </p>
            <FaPlusCircle
              size={20}
              color="#8bc34a"
              className="cursor-pointer"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-zinc-800 leading-snug">
            {name}
          </h3>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <img src={assets.rating_starts} alt="rating" className="w-16" />
          </div>
        </div>

        <p className="text-sm text-zinc-500 mb-6 line-clamp-2 leading-relaxed">
          {desc}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-zinc-800">
            {currency}
            {price}
          </span>
          {!cartItems[id] ? (
            <button
              onClick={() => addToCart(id)}
              className="bg-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-orange-200 active:scale-95 transition-all"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center bg-zinc-100 rounded-full px-2 py-1">
              <button
                onClick={() => removeFromCart(id)}
                className="w-8 h-8 flex items-center justify-center text-zinc-600 hover:bg-white rounded-full transition-colors"
              >
                <FaMinusCircle size={16} color="#f44336" />
              </button>
              <span className="px-3 text-sm font-bold text-zinc-800">
                {cartItems[id]}
              </span>
              <button
                onClick={() => addToCart(id)}
                className="w-8 h-8 flex items-center justify-center text-zinc-600 hover:bg-white rounded-full transition-colors"
              >
                <FaPlusCircle size={16} color="#8bc34a" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
